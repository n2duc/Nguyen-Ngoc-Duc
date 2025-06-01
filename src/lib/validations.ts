import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  fullname: z.string(),
  username: z.string(),
  avatar: z.string().url(),
  phoneNumber: z.string(),
  email: z.string().email(),
  type: z.string(),
  experience: z.string(),
  status: z.enum(["active", "inactive"]),
});

export type User = z.infer<typeof userSchema>;

export interface Customer {
  index: number
  customerId: string
  firstName: string
  lastName: string
  company: string
  city: string
  country: string
  phone1: string
  phone2: string
  email: string
  subscriptionDate: string
  website: string
}