import { MediaQueryContext } from "@/context/media";
import { EMediaQuery } from "@/enums/media";
import React, { useContext } from "react";

export const Navbar: React.FC<NavbarProps> = () => {
    const mediaContext = useContext(MediaQueryContext);

    return(
        <div>
            {mediaContext.media === EMediaQuery.DESKTOP ? <></> : <p>AA</p>}
        </div>
    )
}