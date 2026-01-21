
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default async function Home() {

  return (
    <div className="space-x-3">
      <h1>Hello World</h1>
      <Button variant={"ghost"}>Click Me</Button>
      <Link className="" href={"/about"}>About</Link>
      <Link className="" href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
