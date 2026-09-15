import Post from "../components/Post";

export interface User {
  name: string;
  email: string;
  password: string;

  postCreated?: Post[];
}

export interface Post {
  id: number;
  date?: string;
  text?: string;
  image?: string;
  like?: number;
}

export interface AllFeed {
  username: string;
  postCreated?: Post[];
}

const users: User[] = [
  {
    name: "harshit",
    email: "exc@email.com",
    password: "hars",
    postCreated: [
      {
        text: "this is my first post",
        date: "12-12-26",
        id: Date.now(),
      },
      {
        text: "this is my second post",
        date: "12-12-26",
        like: 10,
        id: Date.now(),
      },
    ],
  },
  {
    name: "shiv",
    email: "exc@email.com",
    password: "shiv",
    postCreated: [
      {
        text: "this is my first post",
        date: "12-12-26",
        id: Date.now(),
      },
      {
        text: "this is my first post",
        date: "12-12-26",
        id: Date.now(),
      },
      {
        text: "this is my first post",
        date: "12-12-26",
        id: Date.now(),
      },
      {
        text: "this is my first post",
        date: "12-12-26",
        id: Date.now(),
      },
      {
        text: "this is my second post",
        date: "12-12-26",
        like: 10,
        id: Date.now(),
      },
    ],
  },
];

const allFeed: AllFeed[] = [
  {
    username: "harshit",
    postCreated: [
      {
        text: "this is my first post",
        date: "12-12-26",
        id: Date.now(),
      },
      {
        text: "this is my second post",
        date: "12-12-26",
        like: 10,
        id: Date.now(),
      },
    ],
  },
  {
    username: "shiv",
    postCreated: [
      {
        text: "this is my first post",
        date: "12-12-26",
        id: Date.now(),
      },
      {
        text: "this is my first post",
        date: "12-12-26",
        id: Date.now(),
      },
      {
        text: "this is my first post",
        date: "12-12-26",
        id: Date.now(),
      },
      {
        text: "this is my first post",
        date: "12-12-26",
        id: Date.now(),
      },
      {
        text: "this is my second post",
        date: "12-12-26",
        like: 10,
        id: Date.now(),
      },
    ],
  },
];

export function addPost(user: User, post: Post): void {
  console.log(user);
  console.log(post);

  user.postCreated?.push(post);
  console.log(user);
}

export function addImage(user: User, image: string, id: number): User {
  if (!user.postCreated) return user;
  return {
    ...user,
    postCreated: user.postCreated.map((post) =>
      post.id === id ? { ...post, image } : post,
    ),
  };
}

export default users;
