import z from "zod";

export const createAccountRequestValidator = z
  .object({
    firstName: z.string().nonempty("Field first name is required!"),
    lastName: z.string().nonempty("Field last name is required!"),
    email: z.email("Invalid email format!"),
    password: z
      .string()
      .min(8, "The password must be at least 8 characters long!"),
    confirmationPassword: z
      .string()
      .min(8, "The confirmation password must be at least 8 characters long!"),
  })
  .refine((data) => data.password === data.confirmationPassword, {
    message: "Passwords do not match!",
    path: ["confirmationPassword"],
  });
