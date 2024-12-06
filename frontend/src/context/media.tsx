import { createContext } from "react";
import { MediaContextProps } from "./types";
import { EMediaQuery } from "@/enums/media";

export const MediaQueryContext = createContext<MediaContextProps>({
    media: EMediaQuery.MOBILE
})