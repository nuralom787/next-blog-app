
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function Home() {
  return (
    <div className="space-y-3">
      <h1>Hello World</h1>
      <Button variant={"ghost"}>Click Me</Button>
      <Link href={"/about"}>About</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
