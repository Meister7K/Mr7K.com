"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { FC } from "react";
import blogs from "@/lib/blogData";

interface Blog {
  id: string | number;
  title: string;
  src: string | null;
  description: string;
  content: string;
}

// Dynamic blog post page component
const BlogPost: FC = () => {
  const { slug } = useParams();

  const blogId = Array.isArray(slug) ? slug[0] : slug;

  // Find the blog post by slug (assuming the slug is the blog ID)
  const blog = blogs.find((b) => b.id === blogId);

  // If no blog post is found, show a 404 message
  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      {blog.src ? <Image alt="blog image" src={blog.src} width={600} height={400} /> : null}
      <p className="mt-4">{blog.content}</p>
    </div>
  );
};

export default BlogPost;
