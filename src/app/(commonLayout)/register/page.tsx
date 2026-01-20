import { RegisterForm } from "@/components/modules/authentication/register-form";
import { authClient } from "@/lib/auth-client";


export default async function Register() {
  const session = await authClient.getSession();
  console.log("Current session:", session);

  
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  )
}
