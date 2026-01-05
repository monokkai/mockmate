import { MockmateOptions } from "./types";
import { fetchData } from "./fetcher";

export async function generate(options: MockmateOptions) {
    const data = await fetchData(options.category)

    let result = options.quantity ? data.slice(0, options.quantity) : data

    if (options.pick) {
        result = result.map((item: Record<string, unknown>) => {
            const picked: Record<string, unknown> = {}

            for (const key of options.pick!) {
                if (key in item) picked[key] = item[key]
            }

            return picked;
        })
    }

    if (options.extend) {
        result = result.map((item: Record<string, unknown>) => ({
            ...item,
            ...Object.fromEntries(
                Object.entries(options.extend!).map(([key, fn]) => [
                    key,
                    fn()
                ])
            )
        }))
    }

    return result;
}
