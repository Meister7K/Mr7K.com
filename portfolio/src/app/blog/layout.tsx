import { AwaitedReactNode, FC, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import Link from 'next/link';
import blogs from '../../lib/blogData'; // This will be your blog data

interface BlogLayoutProps {
  children: ReactNode;
}

// Blog layout component to structure the blog page
const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <nav className="w-1/4 p-4">
        <ul>
          {blogs.map((blog: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
            <li key={blog.id} className="mb-2">
              <Link href={`/blog/${blog.id}`}>
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default BlogLayout;
