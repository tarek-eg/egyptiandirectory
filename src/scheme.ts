import { z } from "zod";

export const directory = z.array(
  z.object({
    name: z.string().describe("Name of the business").optional(),
    owner_name: z.string().describe("Name of the business owner").optional(),
    description: z.string().describe("Short description of the business"),
    tags: z
      .array(z.string())
      .describe("List of keywords to help find the business"),
    location: z.object({
      country: z.string(),
      city: z.string(),
      address: z.string().describe("Street address of the business"),
      google_maps_url: z.string().optional().describe("Google Maps URL"),
    }),
    contact: z.object({
      phone: z.string().optional(),
      email: z.string().email().optional(),
      website: z.string().url().optional(),
    }),
  })
);
