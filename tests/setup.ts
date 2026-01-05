import fetch from "node-fetch"

global.fetch = fetch as any;

declare global {
    namespace NodeJS {
        interface Global {
            fetch: typeof fetch;
        }
    }
}
