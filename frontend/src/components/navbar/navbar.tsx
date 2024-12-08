import { DesignContext } from "@/context/design";
import { EMediaQuery } from "@/enums/design";
import { HomeIcon, InfoIcon, MapIcon, MessageCircleIcon, NotebookText, ChartLine, SparklesIcon, UserRound, CalendarHeart, LogOut  } from "lucide-react";
import React, { useContext } from "react";
import { useLocation } from "react-router";

const items = {
    explore: {
        name: "Objevit",
        icon: <SparklesIcon size={24} color="#000000"/>,
        link: "/explore",
        hoverColor: "hover:stroke-yellow-600",
        activeColor: "stroke-yellow-600"
    },
    diary: {
        name: "Deník",
        icon: <NotebookText size={24} color="#000000"/>,
        link: "/diary",
        hoverColor: "hover:stroke-blue-600",
        activeColor: "stroke-blue-600"
    },
    statistic: {
        name: "Deník",
        icon: <ChartLine  size={24} color="#000000"/>,
        link: "/statistic",
        hoverColor: "hover:stroke-blue-600",
        activeColor: "stroke-blue-600"
    },
    chats: {
        name: "Chaty",
        icon: <MessageCircleIcon size={24} color="#000000"/>,
        link: "/chat",
        hoverColor: "hover:stroke-orange-600",
        activeColor: "stroke-orange-600"
    },
    profile: {
        name: "Profil",
        icon: <UserRound  size={24} color="#000000"/>,
        link: "/profile",
        hoverColor: "hover:stroke-green-600",
        activeColor: "stroke-green-600"
    },
    map: {
        name: "Mapa",
        icon: <MapIcon size={24} color="#000000"/>,
        link: "/map",
        hoverColor: "hover:stroke-purple-600",
        activeColor: "stroke-purple-600"
    },
    settings: {
        name: "O aplikaci",
        icon: <InfoIcon size={24} color="#000000"/>,
        link: "/settings",
        hoverColor: "hover:stroke-gray-600",
        activeColor: "stroke-gray-600"
    },
    life: {
        name: "Životní plán",
        icon: <CalendarHeart size={24} color="#000000"/>,
        link: "/life",
        hoverColor: "hover:stroke-pink-600",
        activeColor: "stroke-pink-600"
    },
    logout: {
        name: "Odhlásit",
        icon: <LogOut size={24} color="#000000"/>,
        link: "",
        hoverColor: "hover:stroke-blue-600",
        activeColor: "stroke-blue-600"
    }
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

const NavbarItem:React.FC<NavbarItemProps> = ({item, isMobile}) => {
    const location = useLocation();

    const isActive = location.pathname === item.link;

    console.log(isActive, location.pathname, item.link);

    return(
        <a href={item.link} className={`${!isMobile ? "size-8" : "size-12"} flex justify-center items-center ${isActive && item.activeColor} ${item.link === "" && "pointer-events-none"}`}>
            {React.cloneElement(item.icon, {
                className: `hover:scale-110 duration-300 ${item.hoverColor} ${isActive && item.activeColor} `,
            })}
        </a>
    )
}

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
    const mobileItems = [items.explore, items.chats, items.diary, items.statistic, items.life, items.profile, items.settings];

    return(
        <div className="flex fixed bottom-0 h-20 w-screen justify-around items-center border-t-2 border-gray-400/50 border-solid z-50 bg-white">
            {mobileItems.map((item) => (
                <NavbarItem {...{item}} isMobile={true}/>
            ))}
        </div>
    )
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = () => {
    const desktopMainItems = [items.explore, items.chats, items.diary, items.statistic, items.life, items.profile];

    return(
        <div className="h-screen w-20 relative">
            <div className="flex flex-col gap-4 h-screen fixed w-20 top-0 left-0 border-r-2 py-4">
                <div className="flex-1 flex flex-col items-center gap-8 justify-center">
                    {desktopMainItems.map((item) => (
                        <NavbarItem {...{item}} isMobile={false}/>
                    ))}
                </div>
                <div className="flex flex-col items-center gap-8">
                    <NavbarItem item={items.settings} isMobile={false} />
                </div>
                <div onClick={(e) => {e.stopPropagation(); window.location.href = "/"}} className="flex flex-col items-center gap-8">
                    <NavbarItem item={items.logout} isMobile={false} />
                </div>
            </div>
        </div>
    )
}