import * as z from "zod";

export const addTechnologySchema = z.object({
  image: z.string().url("La imagen debe ser una URL válida").optional().or(z.literal("")),
});
