import { createContext } from "react";
import { GlobalContextProps } from "./types";

export const GlobalContext = createContext<GlobalContextProps>({
    user: {},
    setUser: () => {}
})