declare module "google-trends-api" {
  export interface InterestOverTimeOptions {
    keyword: string | string[];
    startTime?: Date;
    endTime?: Date;
    geo?: string;
    category?: number;
  }

  export function interestOverTime(options: {
    keyword: string[];
    startTime: Date;
    geo: string;
    tz: number;
    hl: string;
    property: string;
  }): Promise<string>;

  const _default: {
    interestOverTime: typeof interestOverTime;
  };
  export default _default;
}
