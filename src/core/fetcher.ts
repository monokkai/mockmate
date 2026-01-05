import { DataCategory } from "./types"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function fetchData(category: DataCategory) {
    const response = await fetch(`${BASE_URL}/${category}`)
    return response.json()
}
