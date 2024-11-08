import { defineVitestConfig } from "@nuxt/test-utils/config";

// https://nuxt.com/docs/getting-started/testing
export default defineVitestConfig({
  test: {
    environment: "nuxt",
    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
          indexedDb: true
        }
      }
    }
  }
});
