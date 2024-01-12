import * as z from "zod";
import { Control, UseControllerProps } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { loginSchema } from "@/schemas/login.schema";
import { InputHTMLAttributes } from "react";

interface FormInputProps {
  control: Control<z.infer<typeof loginSchema>>;
  name: UseControllerProps<z.infer<typeof loginSchema>>["name"];
  placeholder: string;
  label: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}

export const FormInput = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
