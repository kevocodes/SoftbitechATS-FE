"use client";
import * as z from "zod";
import { useEffect, useTransition } from "react";
import { createTechnology } from "@/actions/technologies/create-technologies.action";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { addTechnologySchema } from "@/schemas/technology.schema";
import { useTechnologyModal } from "@/stores/technology-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Dropzone } from "./dropzone";

export const AddTechnologyForm = () => {
  const [isPending, startTransition] = useTransition();
  const close = useTechnologyModal((state) => state.close);

  const form = useForm<z.infer<typeof addTechnologySchema>>({
    resolver: zodResolver(addTechnologySchema),
  });

  async function onSubmit(values: z.infer<typeof addTechnologySchema>) {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("image", values.image[0]);

      const { succes, error } = await createTechnology(formData);

      if (error) {
        toast.error(error);
        return;
      }

      toast.success(succes);
      close();
    });
  }

  useEffect(() => {
    if (form.formState.errors.image) {
      toast.error(form.formState.errors.image.message);
      return;
    }
  }, [form.formState.errors]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <Dropzone form={form} />

        <Button>
          {isPending && <Loader2 className="animate-spin mr-2" size={20} />}
          Enviar
        </Button>
      </form>
    </Form>
  );
};
