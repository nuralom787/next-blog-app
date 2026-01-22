
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { blogService } from "@/services/blog.service";
import Image from "next/image";
import { Post } from "@/types/BlogTypes";

export default async function Home() {

  const { data } = await blogService.getBlogPost(
    {
      orderBy: "asc",
      isFeatured: false,
      search: ""
    },
    // {
    //   cache: "no-store"
    // }
  );

  // console.log(data)

  return (
    <div className="space-x-3 max-w-screen-2xl mx-auto px-6">
      <Button variant={"ghost"}>Click Me</Button>
      <Link className="" href={"/about"}>About</Link>
      <Link className="" href={"/dashboard"}>Dashboard</Link>
      <div className="mt-6 grid grid-cols-3 gap-3 ">
        {
          data?.posts?.map((post: Post, idx: number) => <div className="border border-gray-100 rounded-md p-5" key={idx}>
            <div>
              <Image
                src={post.thumbnail}
                alt="Post Image"
                height={100}
                width={100}
                loading="eager"
              />
            </div>
            <div>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
              <small>{post.status}</small>
            </div>
            <div className="text-end">
              <Link
                className="border border-gray-200 text-sm font-semibold py-1.5 px-4 rounded"
                href={`/blogs/${post.id}`}>
                Read More
              </Link>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}
