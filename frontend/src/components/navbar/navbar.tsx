import { DesignContext } from "@/context/design";
import { EMediaQuery } from "@/enums/design";
import { HomeIcon, MapIcon, MessageCircleIcon, NotebookText, SettingsIcon, SparklesIcon, UserRound  } from "lucide-react";
import React, { useContext } from "react";

const items = {
    home: {
        name: "Domů",
        icon: <HomeIcon size={24} color="#000000" className="hover:stroke-red-600 hover:scale-110 duration-300 stroke-white"/>,
        link: "/home"
    },
    explore: {
        name: "Objevit",
        icon: <SparklesIcon size={24} color="#000000" className="hover:stroke-yellow-600 hover:scale-110 duration-300 stroke-white"/>,
        link: "/home",
    },
    diary: {
        name: "Deník",
        icon: <NotebookText size={24} color="#000000" className="hover:stroke-blue-600 hover:scale-110 duration-300 stroke-white"/>,
        link: "/diary"
    },
    chats: {
        name: "Chaty",
        icon: <MessageCircleIcon size={24} color="#000000" className="hover:stroke-orange-600 hover:scale-110 duration-300 stroke-white"/>,
        link: "/chat"
    },
    profile: {
        name: "Profil",
        icon: <UserRound  size={24} color="#000000" className="hover:stroke-green-600 hover:scale-110 duration-300 stroke-white"/>,
        link: "/profile"
    },
    map: {
        name: "Mapa",
        icon: <MapIcon size={24} color="#000000" className="hover:stroke-purple-600 hover:scale-110 duration-300 stroke-white"/>,
        link: "/map"
    },
    settings: {
        name: "Nastavení",
        icon: <SettingsIcon size={24} color="#000000" className="hover:stroke-gray-600 hover:scale-110 duration-300 stroke-white"/>,
        link: "/settings"
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

const NavbarItem:React.FC<NavbarItemProps> = ({item}) => {
    return(
        <a href={item.link} className={"size-8 flex justify-center items-center"}>
            {item.icon}
        </a>
    )
}

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
    const mobileItems = [items.explore, items.diary, items.chats, items.profile, items.map, items.settings];

    return(
        <div className="flex fixed bottom-0 h-36">
            {mobileItems.map((item) => (
                <NavbarItem {...{item}}/>
            ))}
        </div>
    )
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = () => {
    const desktopMainItems = [items.home, items.explore, items.diary, items.chats, items.map, items.profile];


    return(
        <div className="flex flex-col gap-14 h-screen w-20 border-r-2 py-4 bg-gradient-to-b from-gray-800 to-gray-950">
            <div className="flex-1 flex flex-col items-center gap-8 justify-center">
                {desktopMainItems.map((item) => (
                    <NavbarItem {...{item}}/>
                ))}
            </div>
            <div className="flex flex-col items-center gap-8">
                <NavbarItem item={items.settings} />
            </div>
        </div>
    )
}