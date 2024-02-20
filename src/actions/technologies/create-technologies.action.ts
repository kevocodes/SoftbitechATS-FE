"use server";

import cloudinary from "@/lib/cloudinary";
import { UploadApiResponse } from "cloudinary";
import { revalidatePath } from "next/cache";

export const createTechnology = async (formData: FormData) => {
  const image = formData.get("image") as File;

  if (!image) return { error: "No se ha seleccionado una imagen" };

  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  try {
    const uploadResult = await new Promise<UploadApiResponse | undefined>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: process.env.CLOUD_TECHNOLOGIES_FOLDER,
              resource_type: "image",
            },
            (error, uploadResult) => {
              if (error) return reject(error);

              return resolve(uploadResult);
            }
          )
          .end(buffer);
      }
    );

    if (!uploadResult) return { error: "Error al crear la tecnología" };

    await prisma?.technology.create({
      data: {
        image: uploadResult.secure_url,
      },
    });

    revalidatePath("/");
    return { succes: "Tecnología agregada con éxito" };
  } catch (error) {
    return { error: "Error al crear la tecnología" };
  }
};
