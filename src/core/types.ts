export type DataCategory = "users" | "posts" | "comments" | "todos";

export type DataSource = "jsonplaceholder" | "fakestoreapi";

export type ExtendFn = () => unknown;

export type GeneratorFn<T = unknown> = () => T;

export type SchemaDefenititon = Record<string, GeneratorFn>;

export interface MockmateOptions {
  category: DataCategory;
  quantity?: number;
  source?: DataSource;
  pick?: string[];
  extend?: Record<string, ExtendFn>;
  schema?: SchemaDefenititon;
}
