import { blogService } from "@/services/blog.service";
import { Post } from "@/types/BlogTypes";
import { Calendar, Eye, MessageSquare, Tag } from "lucide-react";

export async function generateStaticParams() {
    const { data } = await blogService.getBlogPost();
    return data?.posts?.map((blog: Post) => ({ id: blog.id }))
}

const SingleBlog = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const { data: post } = await blogService.getSinglePost(id);

    const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });


    return (
        <div className="max-w-screen-2xl mx-auto px-6">
            <div className="max-w-2xl border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                    {/* Header: Featured Badge & Date */}
                    <div className="flex items-center justify-between mb-4">
                        <span className="flex items-center text-xs text-slate-500">
                            <Calendar size={14} className="mr-1" />
                            {formattedDate}
                        </span>
                        {post.isFeatured && (
                            <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase">
                                Featured
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                        {post.title}
                    </h2>

                    {/* Content Preview */}
                    <p className="text-slate-600 mb-6 line-clamp-3">
                        {post.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="flex items-center px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-md"
                            >
                                <Tag size={12} className="mr-1" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer: Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-sm text-slate-500">
                        <div className="flex gap-4">
                            <span className="flex items-center">
                                <Eye size={16} className="mr-1" />
                                {post.views} views
                            </span>
                            <span className="flex items-center">
                                <MessageSquare size={16} className="mr-1" />
                                {post._count.comments} comments
                            </span>
                        </div>

                        <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                            Read More →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;