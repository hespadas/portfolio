"use client";

import useSWR from "swr";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface TrendChartProps {
  keywords: string[];
  height?: number | string;
}

const COLORS = ["#60A5FA", "#F472B6", "#34D399", "#FBBF24", "#8B5CF6"];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TrendChart({
  keywords,
  height = "100%",
}: TrendChartProps) {
  const kwParam = keywords.join(",");
  const { data, error, isLoading } = useSWR(
    `/api/trends/google?kw=${kwParam}`,
    fetcher,
    {
      refreshInterval: 1000 * 60 * 60 * 6,
      revalidateOnFocus: false,
    },
  );

  if (isLoading) {
    return (
      <div className="h-full w-full rounded-lg bg-neutral-800/50 animate-pulse" />
    );
  }
  if (error || !data) {
    return (
      <div className="flex h-full items-center justify-center text-xs text-neutral-400">
        Erro ao carregar tendências
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart
        data={data as any[]}
        margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.12} />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 10, fill: "#a1a1aa" }}
          tickFormatter={(val) => val}
        />
        <YAxis hide domain={[0, 100]} />
        <Tooltip wrapperClassName="!text-xs" />
        {keywords.map((kw, idx) => (
          <Line
            key={kw}
            type="monotone"
            dataKey={kw}
            stroke={COLORS[idx % COLORS.length]}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
