
import { DesignContext } from "@/context/design";
import { EMediaQuery } from "@/enums/design";
import React, { useContext } from "react";
import logo from "@/../public/Logo.png";

import { Menu } from 'lucide-react';
import { Link } from "react-router";

export const Navbar: React.FC<NavbarProps> = () => {
    const mediaContext = useContext(DesignContext);

    return(
        <>
            {mediaContext.media === EMediaQuery.DESKTOP &&
                <div className="w-full px-[4.5%] py-6 flex items-center justify-between absolute bg-transparent z-[100]">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-[200px] h-[60px] cursor-pointer"/>
                    </Link>
                </div>
            }
            {mediaContext.media === EMediaQuery.MOBILE && 
                <div className="w-full px-[7.5%] py-6 flex items-center justify-between absolute bg-transparent z-[100]">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-[200px] h-[60px] cursor-pointer"/>
                    </Link>
                    <Menu className="block cursor-pointer w-[40px] h-[40px] text-black"/>
                </div>
            }
        </>

    )
}
