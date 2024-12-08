import { DesignContext } from "@/context/design";
import { EMediaQuery } from "@/enums/design";
import { set } from "date-fns";
import { UsersRound, LogOut, Settings } from "lucide-react";
import React, { useContext } from "react";
import { useLocation } from "react-router";

const items = {
    users: {
        name: "Domů",
        icon: <UsersRound size={24} color="#ffffff"/>,
        link: "/admin/users",
        hoverColor: "hover:stroke-cyan-500",
        activeColor: "stroke-white"
    },
    setting: {
        name: "Nastavení",
        icon: <Settings size={24} color="#ffffff"/>,
        link: "/admin/settings",
        hoverColor: "hover:stroke-cyan-500",
        activeColor: "stroke-white"
    },
    logOut: {
        name: "Odhlásit se",
        icon: <LogOut size={24} color="#ffffff"/>,
        link: "/admin/users",
        hoverColor: "hover:stroke-cyan-500",
        activeColor: "stroke-white"
    },
}

export const Navbar: React.FC<NavbarProps> = () => {
    const designContext = useContext(DesignContext);

    return(
        <>
            {designContext.media === EMediaQuery.DESKTOP ? 
            <DesktopNavbar/> :
            <MobileNavbar/>
            }
        </>
    )
}

const NavbarItem:React.FC<NavbarItemProps> = ({item}) => {
    const location = useLocation();

    const isActive = location.pathname === item.link;

    console.log(isActive, location.pathname, item.link);

    return(
        <a href={item.link} className={`size-8 flex justify-center items-center ${isActive && item.activeColor}`}>
            {React.cloneElement(item.icon, {
                className: `hover:scale-110 duration-300 ${item.hoverColor} ${isActive && item.activeColor} `,
            })}
        </a>
    )
}

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
    const mobileItems = [items.users, items.setting, items.logOut];

    return(
        <div className="flex fixed bottom-0 h-36">
            {mobileItems.map((item) => (
                <NavbarItem {...{item}}/>
            ))}
        </div>
    )
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = () => {
    const desktopMainItems = [items.users, items.setting];

    return(
        <div className="h-screen w-20 relative bg-gradient-to-b from-gray-500 to-gray-950">
            <div className="flex flex-col gap-14 h-screen fixed w-20 top-0 left-0 border-r-2 py-4">
                <div className="flex-1 flex flex-col items-center gap-8 justify-center">
                    {desktopMainItems.map((item) => (
                        <NavbarItem {...{item}}/>
                    ))}
                </div>
                <div className="flex flex-col items-center gap-8">
                    <NavbarItem item={items.logOut} />
                </div>
            </div>
        </div>
    )
}