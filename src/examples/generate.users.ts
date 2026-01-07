import { mockmate } from "../index.js";

async function run() {
  const users = await mockmate({
    category: "users",
    quantity: 2,
    extend: {
      zipcode: () => "90566 - 7771",
    },
  });

  console.groupCollapsed("Generated users: ");
  console.table(users);
  console.groupEnd();
  console.log(users);
}

run();
