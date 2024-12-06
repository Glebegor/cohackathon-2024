import { Navbar } from "@/components/navbar/navbar";
import { Gradient } from "animated-gradient"
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
                width: '100vw',
                height: '100vh',
                opacity: .3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            />
            <div className="absolute top-0 left-0">
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    );
}