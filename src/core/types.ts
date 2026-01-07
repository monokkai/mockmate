export type DataCategory = "users" | "posts" | "comments" | "todos";

export type ExtendFn = () => unknown;

export type GeneratorFn<T = unknown> = () => T;

export type SchemaDefenititon = Record<string, GeneratorFn>;

export interface MockmateOptions {
  category: DataCategory;
  quantity?: number;
  pick?: string[];
  extend?: Record<string, ExtendFn>;
  schema?: SchemaDefenititon;
}
