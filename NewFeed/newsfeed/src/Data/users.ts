export interface User {
  name: string;
  email: string;
  password: string;

  postCreated?: Post[];
}

interface Post {
  date?: string;
  text?: string;
  image?: string;
  like?: number;
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
      },
      {
        text: "this is my second post",
        date: "12-12-26",
      },
    ],
  },
];

export default users;
