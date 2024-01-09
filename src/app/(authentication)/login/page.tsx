import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import { LoginForm } from "./components/login-form";

export const metadata: Metadata = {
  title: "Iniciar Sesión",
}

function Login() {
  return (
    <main className="min-h-screen grid place-items-center">
      <Card className="w-full max-w-xl border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle>Softbitech - ATS</CardTitle>
          <CardDescription>
            Ingresa tus credenciales para iniciar sesión
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}

export default Login;
