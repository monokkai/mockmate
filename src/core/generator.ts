import type { MockmateOptions } from "./types.js";
import { fetchData } from "./fetcher.js";
import { generateFromSchema } from "./shema.js";

export async function generate(options: MockmateOptions) {
  let result: any[] = [];

  if (options.schema) {
    result = generateFromSchema(options.schema, options.quantity ?? 1);
  } else if (options.category) {
    const data = await fetchData(options.category, options.source);
    result = options.quantity ? data.slice(0, options.quantity) : data;
  } else {
    throw new Error('Mockmate: provide either "schema" or "category"');
  }

  if (options.pick) {
    result = result.map((item: Record<string, unknown>) => {
      const picked: Record<string, unknown> = {};

      for (const key of options.pick!) {
        if (key in item) picked[key] = item[key];
      }

      return picked;
    });
  }

  if (options.extend) {
    result = result.map((item: Record<string, unknown>) => ({
      ...item,
      ...Object.fromEntries(
        Object.entries(options.extend!).map(([key, fn]) => [key, fn()])
      ),
    }));
  }

  return result;
}
