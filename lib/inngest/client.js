// inngest client
import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "budgetiq", // Unique app ID
  name: "BudgetIQ",
  // retry if any of the functions fail
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
