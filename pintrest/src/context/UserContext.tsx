import { type User } from "../data/userData";
import React, {
  createContext,
  useContext,
  type SetStateAction,
  type ReactNode,
} from "react";
import { useState } from "react";

// creating the type of the userContext
type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

// creating the userContext
const UserContext = createContext<UserContextType | undefined>(undefined);

// creating the user provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
};
