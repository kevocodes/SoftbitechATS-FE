import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";

export const LoginForm = function () {
  return (
    <form className="flex flex-col gap-6">
      <FormInput
        id="email"
        label="Correo Electrónico"
        placeholder="jhondoe@hotmail.com"
        type="email"
      />

      <FormInput id="password" label="Password" type="password" />

      <Button>Iniciar Sesión</Button>
    </form>
  );
};
