import { generate } from "./core/generator";
import { MockmateOptions } from "./core/types";

export function mockmate(options: MockmateOptions) {
    return generate(options)
}
