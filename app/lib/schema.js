// Schema for our form
// Using zod for creating our schema

// gonna be defining how or what eg: name - string, min 1 letter like that

import { z } from "zod";

// Inside this, we are going to structure our form
export const accountSchema = z.object({
  name: z.string().min(1, "Name is required"), // name part is the error thrown
  type: z.enum(["CURRENT", "SAVINGS"]),
  balance: z.string().min(1, "Initial balance is required"),
  isDefault: z.boolean().default(false),
});
