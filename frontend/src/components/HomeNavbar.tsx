
import { DesignContext } from "@/context/design";
import { EMediaQuery } from "@/enums/design";
import React, { useContext } from "react";
import logo from "@/../public/IScorp_logo.png";

import { Menu } from 'lucide-react';
import { Link } from "react-router";

export const Navbar: React.FC<NavbarProps> = () => {
    const mediaContext = useContext(DesignContext);

    return(
        <>
            {mediaContext.media === EMediaQuery.DESKTOP &&
                <div className="w-full px-[7.5%] py-8 flex items-center justify-between absolute bg-transparent z-[100]">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-[230px] h-[70px] cursor-pointer"/>
                    </Link>
                    <div className="flex flex-row gap-[30px]">
                        <div className="flex flex-row justify-between items-center gap-[30px]">
                            <Link to="/" className="group text-white text-[20px] font-medium cursor-pointer relative no-underline">
                                Home
                                <span className="absolute left-0 bottom-[-10px] h-[1px] w-0 bg-cyan-400 transition-all duration-350 group-hover:w-full"></span>
                            </Link>
                            <Link to="/o-nas" className="group text-white text-[20px] font-medium cursor-pointer relative no-underline">
                                O aplikaci
                                <span className="absolute left-0 bottom-[-10px] h-[1px] w-0 bg-cyan-400 transition-all duration-350 group-hover:w-full"></span>
                            </Link>
                        </div>

                        <button className="cursor-pointer px-[15px] py-[8px] text-[16px] text-white rounded-[6px] border border-white bg-transparent tracking-[1px] transition duration-350 hover:border-cyan-400 hover:text-cyan-400"><Link to="/login">Přihlášení</Link></button>
                    </div>
                </div>
            }
            {mediaContext.media === EMediaQuery.MOBILE && 
                <div className="w-full px-[7.5%] py-8 flex items-center justify-between absolute bg-transparent z-[100]">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-[230px] h-[90px] cursor-pointer"/>
                    </Link>
                    <Menu className="block cursor-pointer w-[40px] h-[40px] text-black"/>
                </div>
            }
        </>

    )
}
