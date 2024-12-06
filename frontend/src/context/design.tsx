import { createContext } from "react";
import { MediaContextProps } from "./types";
import { EMediaQuery, ETheme } from "@/enums/design";

export const DesignContext = createContext<MediaContextProps>({
    media: EMediaQuery.MOBILE,
    theme: ETheme.MODERN
})