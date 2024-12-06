import { Navbar } from "@/components/navbar/navbar";
import { MediaQueryContext } from "@/context/media";
import { EMediaQuery } from "@/enums/media";
import { Gradient } from "animated-gradient"
import React, { useContext } from "react";
import { Outlet } from "react-router";


export const MainLayout: React.FC<MainLayoutProps> = () => {
    return (
        <div className="relative">
            <Gradient
                hexcolors={['4a328a', 'e54f95']}
                variant="radial"
                coords={[50, 50]} // Center position
                timer={5000}
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    opacity: .5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 0
                }}
            />
            <div className="z-10 min-h-screen relative w-screen">
                <ContentLayout>
                    <Navbar/>
                    <div className="flex-1">
                        <Outlet/>
                    </div>
                </ContentLayout>
            </div>
        </div>
    );
}

const ContentLayout:React.FC<ContentLayoutProps> = ({children}) => {
    const mediaContext = useContext(MediaQueryContext);

    return(
        <>
            {mediaContext.media === EMediaQuery.DESKTOP ? 
            <div className="flex">
                {children}
            </div> :
            <div className="flex flex-col-reverse h-full">
                {children}
            </div>}
        </>
    )
}