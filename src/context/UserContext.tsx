import { createContext } from "react";

const initialState = {
  picture: "initialState",
  name: "initialState",
  gender: "initialState",
  age: "initialState",
  email: "initialState",
  phone: "initialState",
  country: "initialState",
};

export type UserState = typeof initialState;

export const UserContext = createContext<typeof initialState>(initialState);

export default UserContext;
