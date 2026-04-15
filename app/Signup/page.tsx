"use client";
import { TextInput, Button } from "@mantine/core";
import { useForm, Controller } from "react-hook-form";

type SignupFormValues = {
  name: string;
  email: string;
  password: string;
};

export default function Signup() {
  const { control, handleSubmit } = useForm<SignupFormValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onsubmit = (data: SignupFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 border rounded-lg shadow-md bg-white">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput label="Name" placeholder="name" {...field} />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput label="Email" placeholder="email" {...field} />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextInput label="Password" placeholder="password" {...field} />
            )}
          />
          <div>
            <Button type="submit" className="flex justify-center mt-4 ml-40">
              Sumit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
