
import { DesignContext } from "@/context/design";
import { EMediaQuery } from "@/enums/design";
import React, { useContext } from "react";
import logo from "@/../public/Logo.png";

import { Menu } from 'lucide-react';
import { Link } from "react-router";
import { Button } from "./ui/button";

export const Navbar: React.FC<NavbarProps> = () => {
    const mediaContext = useContext(DesignContext);

    return(
        <>
            {mediaContext.media === EMediaQuery.DESKTOP &&
                <div className="w-full px-[7.5%] py-6 flex items-center justify-between absolute bg-transparent z-[100]">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-[200px] h-[60px] cursor-pointer"/>
                    </Link>
                    <div className="flex flex-row gap-[30px]">
                        <Link to={"/login"}>
                            <Button className="bg-gradient-to-b from-purple-600 to-pink-700 w-28 h-10 text-sm">
                                <p>Přihlásit se</p>
                            </Button>
                        </Link>
                    </div>
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
