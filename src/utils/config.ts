import type { DataSource } from "../core/types";

export const SOURCE_URLS: Record<DataSource, string> = {
    jsonplaceholder: "https://jsonplaceholder.typicode.com",
    fakestoreapi: "https://fakestoreapi.com"
};

export const BASE_URL = SOURCE_URLS.jsonplaceholder;

export function getBaseUrl(source: DataSource): string {
    return SOURCE_URLS[source];
}
