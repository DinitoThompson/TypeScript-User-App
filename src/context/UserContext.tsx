import { createContext } from "react";

const initialState = {
  picture: "",
  name: "",
  gender: "",
  age: "",
  email: "",
  phone: "",
  cell: "",
  country: "",
  address: "",
};

export type UserState = typeof initialState;

export const UserContext = createContext<typeof initialState>(initialState);

export default UserContext;
