import { BrowserRouter, Route, Routes } from 'react-router'
import { MainLayout } from './pages/layouts/main'
import './index.css'
import { EMediaQuery, ETheme } from './enums/design'
import { useMediaQuery } from 'react-responsive'
import { DesignContext } from './context/design'
import { lazy, Suspense, useState } from 'react'
import { Loading } from './pages/loading/loading'
import { User } from '../../types/user'; 
import { GlobalContext } from './context/global'
import { Dialog, DialogContent, DialogFooter } from './components/ui/dialog'
import { Button } from './components/ui/button'
import { CalendarHeart, Coins, EyeOff, Phone } from 'lucide-react'
import PocketBase from 'pocketbase'

export const pb = new PocketBase("https://api.adamhojer.cz");

const Home = lazy(() => import('./pages/home/home'));
const Messages = lazy(() => import('./pages/messages/Messages'));
const Diary = lazy(() => import('./pages/diary/diary'));
const Profile = lazy(() => import('./pages/profile/profile'));
const Settings = lazy(() => import('./pages/settings/settings'));
const Login = lazy(() => import('./pages/login/login'));
const Statistics = lazy(() => import('./pages/statistic/statistic'));
const Explore = lazy(() => import('./pages/explore/explore'));
const Life = lazy(() => import('./pages/life/life'));

import AdminUsers from './pages/admin/users/users';
import AdminInformations from './pages/admin/informations/informations'
import { AdminLayout } from "./pages/layouts/admin"

const LazyLoader:React.FC<LazyLoderProps> = ({children}) => {
  return(
    <Suspense fallback={<Loading/>}>{children}</Suspense>
  )
}

function App() {
  const media:EMediaQuery = (useMediaQuery({ query: '(min-width: 768px)' }) ? EMediaQuery.DESKTOP : EMediaQuery.MOBILE);
  const theme:ETheme = ETheme.MODERN;

  const [linkaOpen, setLinkaOpen] = useState<boolean>(false);

  const [user, setUser] = useState<User>({
    id: 1,
    childhouse_id: 1,
    name: "Adam",
    surname: "Hojer",
    email: "adam.hojer@infis.cz",
    password_hash: "password",
    last_login: new Date(),
    activated: true
  })
    
  return (
    <GlobalContext.Provider value={{...{user, setUser, linkaOpen, setLinkaOpen}}}>
      <Dialog open={linkaOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <p className='text-3xl font-semibold'>Linka bezpečí</p>
          <div className='flex flex-col gap-6'>
            <p>Pokud si chceš o svých obavách s někým promluvit, můžeš se obrátit na Linku bezpečí:</p>
            <div className='flex gap-4 justify-center items-center text-red-600 font-bold font-sans text-5xl'>
              <Phone size={36} />
              <a href="tel:116111" className='text-red-600 hover:text-red-700 font-sans'>116 111</a>
            </div>
            <div className='flex gap-4 items-start mt-6 mb-3'>
              <div className='flex-1 flex flex-col gap-2 items-center'>
                <EyeOff size={32} />
                <p className='text-center text-sm'>Anonymní a důvěrná</p>
              </div>
              <div className='flex-1 flex flex-col gap-2 items-center'>
                <Coins size={32} />
                <p className='text-center text-sm'>Volání zdarma</p>
              </div>
              <div className='flex-1 flex flex-col gap-2 items-center'>
                <CalendarHeart size={32} />
                <p className='text-center text-sm'>Dostupná nonstop</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <div className='flex gap-2 max-md:flex-col '>
              <Button className='bg-orange-600 hover:bg-orange-600/80' onClick={() => window.open("https://www.linkabezpeci.cz/", "_blank")}>Web Linky Bezpečí</Button>
              <Button onClick={() => setLinkaOpen(false)}>Zavřít</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <DesignContext.Provider value={{...{media, theme}}}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout/>}>
              <Route path="chat" element={<LazyLoader><Messages/></LazyLoader>} />
              <Route path="messages" element={<LazyLoader><Messages/></LazyLoader>} />
              <Route path="diary" element={<LazyLoader><Diary/></LazyLoader>} />
              <Route path="profile" element={<LazyLoader><Profile/></LazyLoader>} />
              <Route path="settings" element={<LazyLoader><Settings/></LazyLoader>} />
              <Route path="statistic" element={<LazyLoader><Statistics/></LazyLoader>} />
              <Route path="life" element={<LazyLoader><Life/></LazyLoader>} />
              <Route path="explore" element={<LazyLoader><Explore/></LazyLoader>} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />

            <Route element={<AdminLayout/>}>
              <Route path="admin">
                <Route path="users" element={<AdminUsers />} />
                <Route path="settings" element={<AdminInformations />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </DesignContext.Provider>
    </GlobalContext.Provider>
  )
}

export default App
