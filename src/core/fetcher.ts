import type { DataCategory } from "./types.js";
import { SourceFetchError } from "./errors.js";
import axios from "axios";
import { BASE_URL } from "../utils/config.js";

export async function fetchData(category: DataCategory) {
  try {
    const response = await axios.get(`${BASE_URL}/${category}`);
    return response.data;
  } catch (error) {
    throw new SourceFetchError(
      `Failed to fetch data from the source: ${category}`
    );
  }
}
