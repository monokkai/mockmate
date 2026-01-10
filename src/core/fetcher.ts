import type { DataCategory, DataSource } from "./types.js";
import { SourceFetchError } from "./errors.js";
import axios from "axios";
import { getBaseUrl } from "../utils/config.js";

export async function fetchData(
  category: DataCategory,
  source: DataSource = "jsonplaceholder"
) {
  try {
    const baseUrl = getBaseUrl(source);
    const response = await axios.get(`${baseUrl}/${category}`);
    return response.data;
  } catch (error) {
    throw new SourceFetchError(
      `Failed to fetch data from the source: ${category}`
    );
  }
}
