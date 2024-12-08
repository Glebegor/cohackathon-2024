import { Navbar } from "@/components/adminNavbar/navbar";
import { DesignContext } from "@/context/design";
import { EMediaQuery } from "@/enums/design";
import React, { useContext } from "react";
import { Outlet } from "react-router";


export const AdminLayout: React.FC<MainLayoutProps> = () => {
    return (
        <div className="z-10 min-h-screen relative w-full">
            <ContentLayout>
                <Navbar/>
                <div className="flex-1 relative pb-8">
                    <Outlet/>
                </div>
            </ContentLayout>
        </div>
    );
}

const ContentLayout:React.FC<ContentLayoutProps> = ({children}) => {
    const designContext = useContext(DesignContext);

    return(
        <>
            {designContext.media === EMediaQuery.DESKTOP ? 
            <div className="flex">
                {children}
            </div> :
            <div className="flex flex-col-reverse h-full">
                {children}
            </div>}
        </>
    )
}