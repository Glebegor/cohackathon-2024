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

const Home = lazy(() => import('./pages/home/home'));
const Dashboard = lazy(() => import('./pages/dashboard/dashboard'));
const Messages = lazy(() => import('./pages/messages/Messages'));
const Diary = lazy(() => import('./pages/diary/diary'));
const Profile = lazy(() => import('./pages/profile/profile'));
const Map = lazy(() => import('./pages/map/map'));
const Settings = lazy(() => import('./pages/settings/settings'));
const Login = lazy(() => import('./pages/login/login'));
const Statistics = lazy(() => import('./pages/statistic/statistic'));
const Explore = lazy(() => import('./pages/explore/explore'));
const Life = lazy(() => import('./pages/life/life'));

const LazyLoader:React.FC<LazyLoderProps> = ({children}) => {
  return(
    <Suspense fallback={<Loading/>}>{children}</Suspense>
  )
}

function App() {
  const media:EMediaQuery = (useMediaQuery({ query: '(min-width: 768px)' }) ? EMediaQuery.DESKTOP : EMediaQuery.MOBILE);
  const theme:ETheme = ETheme.MODERN;

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
    <GlobalContext.Provider value={{...{user, setUser}}}>
      <DesignContext.Provider value={{...{media, theme}}}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout/>}>
              <Route path="home" element={<LazyLoader><Dashboard/></LazyLoader>} />
              <Route path="chat" element={<LazyLoader><Messages/></LazyLoader>} />
              <Route path="messages" element={<LazyLoader><Messages/></LazyLoader>} />
              <Route path="dashboard" element={<LazyLoader><Dashboard/></LazyLoader>} />
              <Route path="diary" element={<LazyLoader><Diary/></LazyLoader>} />
              <Route path="profile" element={<LazyLoader><Profile/></LazyLoader>} />
              <Route path="map" element={<LazyLoader><Map/></LazyLoader>} />
              <Route path="settings" element={<LazyLoader><Settings/></LazyLoader>} />
              <Route path="statistic" element={<LazyLoader><Statistics/></LazyLoader>} />
              <Route path="life" element={<LazyLoader><Life/></LazyLoader>} />
              <Route path="explore" element={<LazyLoader><Explore/></LazyLoader>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DesignContext.Provider>
    </GlobalContext.Provider>
  )
}

export default App
