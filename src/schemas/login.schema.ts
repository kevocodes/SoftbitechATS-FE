import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({message: "Ingresar un correo válido"}),
  password: z.string().min(1, {message: "La contraseña es requerida"}),
});
