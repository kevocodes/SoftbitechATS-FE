"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/login.schema";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/forms/form-input";
import { useTransition } from "react";
import { login } from "@/actions/auth/login.action";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

export const LoginForm = function () {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const callBackUrl = searchParams.get("callbackUrl");

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransition(async () => {
      const result = await login(values, callBackUrl);

      if (result?.error) toast.error(result.error);
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
          label="Correo Electrónico"
          name="email"
          placeholder="jhondoe@email.com"
        />

        <FormInput
          control={form.control}
          label="Contraseña"
          name="password"
          placeholder="********"
          type="password"
        />

        <Button disabled={isPending}>
          {isPending && <Loader2 className="animate-spin mr-2" size={20} />}
          Iniciar Sesión
        </Button>
      </form>
    </Form>
  );
};
