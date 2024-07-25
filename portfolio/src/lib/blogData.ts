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
        title: "5 Coding Tips for Beginners",
        alt: "alt tag",
        description: "The first blog.",
        src: "/clouds-2.jpg",
        content: `Tip # 1: Consistency is Key\n
        This is more of a uniform rule than a tip. Creating a schedule to take time to learn and practice a new skill is imperative to mastering anything. Set up a time every day or weekly (depending on your intensity and availability) dedicated solely to working on your new skill. Attempt to make the time of day consistent in order to better solidify the habit and help your brain solidify the pattern.\n 
        Tip # 2: TimeBlock\n
        This is a solid scheduling technique to mage your time wisely. Set up a chunk of time ex. from 3:00- 4:00pm to work on coding. It's also beneficial to schedule out your entire day in this format.\n
        Tip # 3: Master the Fundamentals\n

        `,
        createdAt: "2024-07-24T22:08:01.121Z",
        category: "Coding",
        href: "blogs/1"
    },
    {
        id: 2,
        title: "Roth vs. Traditional Retirement Accounts",
        description: "The second blog.",
        src: "/clouds-2.jpg",
        alt: "alt tag",
        content: `this is the second blog I wrote. cool right?`,
        createdAt: "2023-09-28T22:08:01.121Z",
        category: "Finance",
        href: "blogs/2"
    },
    {
        id: 3,
        title: "401K vs. IRA",
        description: "The second blog.",
        src: "/clouds-2.jpg",
        alt: "alt tag",
        content: `this is the second blog I wrote. cool right?`,
        createdAt: "2023-09-28T22:08:01.121Z",
        category: "Finance",
        href: "blogs/3"
    }
];

export default blogs;

export const getBlogById = (id: string | number) => {
    return blogs.find((blog) => blog.id.toString() === id.toString()) || null;
};

export const getLatestBlog = () => {
    return blogs[blogs.length - 1];
};