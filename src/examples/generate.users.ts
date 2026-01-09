import { mockmate } from "../index.js";

async function run() {
  const users = await mockmate({
    category: "users",
    quantity: 2,
  });

  console.groupCollapsed("Generated users: ");
  console.table(users);
  console.groupEnd();
  console.log(users);
}

run();
