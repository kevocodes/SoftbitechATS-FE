"use server";

import * as z from "zod";
import { Technology } from "@prisma/client";
import { addTechnologySchema } from "@/schemas/technology.schema";
import { revalidatePath } from "next/cache";

export const createTechnology = async (
  data: z.infer<typeof addTechnologySchema>
) => {
  const validatedFields = addTechnologySchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Datos inválidos" };
  }

  const { image } = validatedFields.data;

  if (!image) return { error: "Imagen requerida" };

  try {
    await prisma?.technology.create({
      data: {
        image,
      },
    });

    revalidatePath("/");
    return { succes: "Tecnología agregada con éxito" };
  } catch (error) {
    return { error: "Error al crear la tecnología" };
  }
};
