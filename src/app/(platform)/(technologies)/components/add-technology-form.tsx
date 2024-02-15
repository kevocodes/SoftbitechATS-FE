"use client";
import { createTechnology } from "@/actions/technologies/create-technologies.action";
import { FormInput } from "@/components/forms/form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { addTechnologySchema } from "@/schemas/technology.schema";
import { useTechnologyModal } from "@/stores/technology-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export const AddTechnologyForm = () => {
  const [isPending, startTransition] = useTransition();
  const close = useTechnologyModal((state) => state.close);

  const form = useForm<z.infer<typeof addTechnologySchema>>({
    resolver: zodResolver(addTechnologySchema),
    defaultValues: {
      image: "",
    },
  });

  async function onSubmit(values: z.infer<typeof addTechnologySchema>) {
    startTransition(async () => {
      const { succes, error } = await createTechnology(values);

      if (error) {
        toast.error(error);
        return;
      }

      toast.success(succes);
      close();
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormInput
          control={form.control}
          name="image"
          placeholder="https://example.com/image.png"
        />

        <Button>
          {isPending && <Loader2 className="animate-spin mr-2" size={20} />}
          Enviar
        </Button>
      </form>
    </Form>
  );
};
