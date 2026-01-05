# mockmate

<p align="center">
  <img src="https://img.shields.io/npm/v/mockmate" alt="npm version" />
  <img src="https://img.shields.io/npm/dw/mockmate" alt="downloads" />
  <img src="https://img.shields.io/github/license/monokkai/mockmate" alt="license" />
</p>

Mockmate is a lightweight mock data generator for JavaScript and TypeScript.
It helps frontend and full-stack developers generate, filter, and extend JSON data
from public APIs with a clean and declarative API.

---

## Features

- Works with JavaScript and TypeScript
- Zero configuration
- Uses real public APIs
- Fully typed API
- Extend and customize data
- Node.js and browser compatible

---

## Installation

```bash
yarn add mockmate
npm install mockmate
pnpm add mockmate
```
### Basic Usage

```ts
import { mockmate } from "mockmate";

const users = await mockmate({
  category: "users",
  quantity: 5,
});
```

### Pick Fields

```ts
const users = await mockmate({
  category: "users",
  pick: ["name", "email"],
});
```

### Extend Data

```ts
const users = await mockmate({
  category: "users",
  extend: {
    isActive: () => true,
    score: () => Math.floor(Math.random() * 100),
  },
});
```

### Error Handling
```ts
try {
  await mockmate({ category: "users" });
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
```

### Supported Categories

```
users
posts
comments
todos
```

### Running Tests
Mockmate uses Jest for testing. You can run tests locally with:

```bash
pnpm add -D jest ts-jest @types/jest
pnpm jest
```

Or using npm/yarn:

```
npm install --save-dev jest ts-jest @types/jest
npm test
```
#### Example test structure:

```ts
// tests/mockmate.test.ts
import { mockmate } from "../src";

describe("mockmate", () => {
  it("should generate an array of users", async () => {
    const users = await mockmate({ category: "users", quantity: 3 });
    expect(users).toHaveLength(3);
    expect(users[0]).toHaveProperty("name");
  });

  it("should pick only selected fields", async () => {
    const users = await mockmate({ category: "users", quantity: 1, pick: ["email"] });
    expect(users[0]).toHaveProperty("email");
    expect(users[0]).not.toHaveProperty("name");
  });
});

```
### License
MIT
