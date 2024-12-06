import { MediaQueryContext } from "@/context/media";
import { EMediaQuery } from "@/enums/media";
import React, { useContext } from "react";

export const Navbar: React.FC<NavbarProps> = () => {
    const mediaContext = useContext(MediaQueryContext);

    return(
        <>
            {mediaContext.media === EMediaQuery.DESKTOP ? 
            <DesktopNavbar>
                <p>Desktop Navbar</p>
            </DesktopNavbar> :
            <MobileNavbar>
                <p>Mobile Navbar</p>
            </MobileNavbar>}
        </>
    )
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({children}) => {
    return(
        <div className="flex fixed bottom-0 h-36">
            {children}
        </div>
    )
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({children}) => {
    return(
        <div className="flex h-screen w-36 border-r-2 border-r-zinc-600">
            {children}
        </div>
    )
}