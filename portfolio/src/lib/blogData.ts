export interface Blog {
    id: string | number;
    title: string;
    src: string ;
    alt: string ;
    description: string;
    content: string;
    createdAt: string;
    category: string;
    href: string | object;
}

const blogs: Blog[] = [
    {
        id: 1,
        title: "Blog 1",
        alt: "alt tag",
        description: "The first blog.",
        src: "/clouds-2.jpg",
        content: "this is the first blog I wrote. cool right?",
        createdAt: "2023-09-28T22:08:01.121Z",
        category: "Coding",
        href: "blogs/1"
    },
    {
        id: 2,
        title: "Blog 2",
        description: "The second blog.",
        src: "/clouds-2.jpg",
        alt: "alt tag",
        content: "this is the second blog I wrote. cool right?",
        createdAt: "2023-09-28T22:08:01.121Z",
        category: "Finance",
        href: "blogs/2"
    }
];

export default blogs;

export const getBlogById = (id: string | number) => {
    return blogs.find((blog) => blog.id.toString() === id.toString()) || null;
};

export const getLatestBlog = () => {
    return blogs[blogs.length - 1];
};