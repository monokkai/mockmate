import { generate } from "./core/generator.js";
import type { MockmateOptions } from "./core/types.js";

export function mockmate(options: MockmateOptions) {
    return generate(options)
}
