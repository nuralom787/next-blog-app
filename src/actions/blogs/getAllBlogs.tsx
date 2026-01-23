"use server";

import { blogService } from "@/services/blog.service";


const getAllBlogs = async () => {
    try {
        const data = await blogService.getBlogPost();
        return data;
    } catch (err) {
        return err
    }
};

export default getAllBlogs;