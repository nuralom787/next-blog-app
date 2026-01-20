
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { cookies } from "next/headers";

export default async function Home() {

  const cookie = await cookies();

  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      cookie: cookie.toString()
    },
    cache: "no-store"
  });

  console.log("SESSION", await res.json());

  return (
    <div className="space-x-3">
      <h1>Hello World</h1>
      <Button variant={"ghost"}>Click Me</Button>
      <Link className="" href={"/about"}>About</Link>
      <Link className="" href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
