"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/login.schema";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/forms/form-input";

export const LoginForm = function () {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    alert("values: " + JSON.stringify(values, null, 2));
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

        <Button>Iniciar Sesión</Button>
      </form>
    </Form>
  );
};
