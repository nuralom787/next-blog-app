"use client";


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner";
import * as z from "zod";


const formSchema = z.object({
  email: z.email(),
  password: z.string().min(12, "minimum length is 12"),
})

export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {

  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      // console.log("Form Clicked", value);
      const toastData = toast.loading("Logging in");
      try {
        const { data, error } = await authClient.signIn.email(value);

        if (error) {
          toast.error(error.message, { id: toastData });
          return;
        }

        toast.success("User Logged in Successfully", { id: toastData })

        console.log("user Data: ", data);
      }
      catch (err) {
        toast.error("Something wants wrong!!", { id: toastData })
      }
    }
  });

  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000",
    })
  };

  return (
    <Card {...props}>
      <CardHeader className="text-center">
        <CardTitle>Login With Your Email & Password</CardTitle>
        <CardDescription>
          Enter your information below to Login.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="login-form" onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}>
          <FieldGroup>
            <form.Field name="email" children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    type="email"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              )
            }} />
            <form.Field name="password" children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    type="password"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              )
            }} />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-center gap-4">
        <Button
          form="login-form"
          type="submit"
          className="w-full cursor-pointer"
        >
          Submit
        </Button>
        <Button className="w-full cursor-pointer" onClick={handleGoogleLogin} variant="outline" type="button">
          Continue with Google
        </Button>
      </CardFooter>
    </Card>
  )
}
