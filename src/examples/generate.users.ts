import { mockmate } from '../index.js'

async function run() {
    const users = await mockmate({
        category: "posts",
        quantity: 2
    })

    console.log(users)
}

run()
