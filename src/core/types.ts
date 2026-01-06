export type DataCategory = "users" | "posts" | "comments" | "todos";

export type ExtendFn = () => unknown;

export interface MockmateOptions {
  category: DataCategory;
  quantity?: number;
  pick?: string[];
  extend?: Record<string, ExtendFn>;
}
