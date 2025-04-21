import { NextRequest, NextResponse } from "next/server";
import googleTrends from "google-trends-api";

const CACHE_DURATION = 1000 * 60 * 60 * 6;
const cache = new Map<string, { ts: number; data: unknown }>();

export async function GET(req: NextRequest) {
    const kwParam = req.nextUrl.searchParams.get("kw");
    if (!kwParam) {
        return NextResponse.json({ error: "Missing 'kw' query param" }, { status: 400 });
    }

    const kwList = kwParam
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    const cacheKey = kwList.sort().join("|");
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.ts < CACHE_DURATION) {
        return NextResponse.json(cached.data);
    }

    try {
        const raw = await googleTrends.interestOverTime({
            keyword: kwList,
            startTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365),
            geo: "BR",
            tz: -180,
            hl: "pt-BR",
            property: "web",
        });

        if (typeof raw !== "string" || raw.trim().startsWith("<")) {
            console.error("Unexpected HTML response from Google Trends:", raw.slice(0, 200));
            return NextResponse.json(
                { error: "Invalid response from Google Trends" },
                { status: 500 }
            );
        }

        const parsed = JSON.parse(raw) as {
            default: {
                timelineData: { time: string; formattedAxisTime: string; value: number[] }[];
            };
        };

        const timeline = parsed.default.timelineData.map((p) => {
            const entry: Record<string, string | number> = {
                date: new Date(parseInt(p.time, 10) * 1000)
                    .toISOString()
                    .split("T")[0],
            };
            p.value.forEach((v, idx) => {
                entry[kwList[idx]] = v;
            });
            return entry;
        });

        cache.set(cacheKey, { ts: Date.now(), data: timeline });
        return NextResponse.json(timeline, { status: 200 });
    } catch (err) {
        console.error("Google Trends error", err);
        return NextResponse.json(
            { error: "Google Trends fetch failed" },
            { status: 500 }
        );
    }
}
