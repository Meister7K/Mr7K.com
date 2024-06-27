export interface Blog {
    id: string | number;
    title: string;
    src: string | null;
    description: string;
    content: string;
    createdAt: string;
    category: string
}

const blogs: Blog[] = [
    { 
        id: 1, 
        title: "Blog 1", 
        description: "The first blog.", 
        src: "/clouds-2.jpg", 
        content: "this is the first blog I wrote. cool right?",
        createdAt: "2023-09-28T22:08:01.121Z",
      category: "Coding" },
    { id: 2, 
        title: "Blog 2", 
        description: "The second blog.", 
        src: "/clouds-2.jpg", 
        content: "this is the second blog I wrote. cool right?",
        createdAt: "2023-09-28T22:08:01.121Z",
      category: "Finance"
     }
];

export default blogs;

export const getBlogById = (id: string | number) => {
    return blogs.find((blog) => blog.id.toString() === id.toString()) || null;
};
