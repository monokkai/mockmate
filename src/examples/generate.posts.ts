import { mockmate } from "../index.js";

async function run() {
  const posts = await mockmate({
    category: "posts",
    source: "jsonplaceholder",
    quantity: 2,
  });

  console.groupCollapsed("Generated posts: ");
  console.table(posts);
  console.groupEnd();
  console.log(posts);
}

run();
