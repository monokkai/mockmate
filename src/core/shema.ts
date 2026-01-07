import type { SchemaDefenititon } from "./types";

export function generateFromSchema(
  schema: SchemaDefenititon,
  quantity: number = 1
) {
  const result = [];

  for (let i = 0; i < quantity; i++) {
    const item: Record<string, unknown> = {};

    for (const key in schema) {
      item[key] = schema[key]();
    }
    result.push(item);
  }

  return result;
}
