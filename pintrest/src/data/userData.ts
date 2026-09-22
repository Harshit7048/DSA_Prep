export interface User {
  name: string;
  email: string;
  password: string;
  savedImages?: string[];
  profileImg?: string;
}

export const userData: User[] = [
  {
    name: "harshit",
    email: "har@mail.com",
    password: "123",
    profileImg:
      "https://i.pinimg.com/736x/b3/1c/01/b31c0179fbfc152cea820f1abb7bd2a5.jpg",
  },
  {
    name: "hars",
    email: "har@mail.com",
    password: "1234",
    profileImg:
      "https://i.pinimg.com/736x/b3/1c/01/b31c0179fbfc152cea820f1abb7bd2a5.jpg",
  },
];
