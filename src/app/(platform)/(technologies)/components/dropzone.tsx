import * as z from "zod";
import DropzoneContainer from "react-dropzone";
import { toast } from "sonner";
import { DropzoneContent } from "./dropzone-content";
import { useForm } from "react-hook-form";
import { addTechnologySchema } from "@/schemas/technology.schema";
import { cn } from "@/lib/utils";

interface DropzoneProps {
  form: ReturnType<typeof useForm<z.infer<typeof addTechnologySchema>>>;
}

export const Dropzone = ({ form }: DropzoneProps) => {
  return (
    <DropzoneContainer
      maxFiles={1}
      accept={{
        "image/png": [],
        "image/jpg": [],
        "image/jpeg": [],
        "image/webp": [],
      }}
      onDrop={(acceptedFiles, rejectedFileas) => {
        if (rejectedFileas.length > 0) {
          toast.error(
            "Solo se permiten imágenes en formato png, jpg, jpeg o webp)"
          );
          return;
        }

        form.setValue("image", acceptedFiles);
      }}
      onFileDialogCancel={() => form.setValue("image", [])}
    >
      {({ getRootProps, getInputProps, isDragActive, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className={cn(
            "w-full rounded-lg bg-muted border-2 border-dashed border-gray-300 p-8 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500",
            isDragActive && "border-primary bg-primary/20",
            acceptedFiles.length > 0 && "border-primary bg-primary/20"
          )}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <DropzoneContent description="Suelta la imagen aquí" />
          ) : (
            <DropzoneContent
              description={
                acceptedFiles.length === 0
                  ? "Arrastra la imagen o haz clic aquí"
                  : acceptedFiles[0].name
              }
            />
          )}
        </div>
      )}
    </DropzoneContainer>
  );
};
