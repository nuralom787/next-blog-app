"use client";

import getAllBlogs from "@/actions/blogs/getAllBlogs";
import { useEffect } from "react";

interface BlogData {
    data: {
        posts: [],
        totalPosts: number
    }
}

const AboutPage = () => {

    useEffect(() => {
        (async () => {
            const { data } = await getAllBlogs() as BlogData;
            console.log(data);
        })()
    }, [])

    return (
        <div>
            <h1>From About page</h1>
        </div>
    );
};

export default AboutPage;