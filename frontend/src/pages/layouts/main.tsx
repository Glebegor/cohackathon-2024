import { Gradient } from "animated-gradient"
import { Outlet } from "react-router";

export const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <div className="relative">
        <Gradient
            hexcolors={['ff0000', '00ff00', '0000ff']}
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
            <Outlet/>
        </div>
    </div>
  );
}