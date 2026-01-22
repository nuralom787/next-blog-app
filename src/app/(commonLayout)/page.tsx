
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { blogService } from "@/services/blog.service";

export default async function Home() {

  const { data } = await blogService.getBlogPost(
    {
      isFeatured: true,
      search: "sdsd"
    },
    {
      cache: "no-store"
    }
  );

  console.log(data)

  return (
    <div className="space-x-3">
      <h1>Hello World</h1>
      <Button variant={"ghost"}>Click Me</Button>
      <Link className="" href={"/about"}>About</Link>
      <Link className="" href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
