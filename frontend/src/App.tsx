import { BrowserRouter, Route, Routes } from 'react-router'
import { Dashboard } from './pages/dashboard/dashboard'
import Login from './pages/login/login'
import { MainLayout } from './pages/layouts/main'
import './index.css'
import { MediaQueryContext } from './context/media'
import { EMediaQuery } from './enums/media'
import { useMediaQuery } from 'react-responsive'
import Messages from './pages/messages/Messages'
import Home from './pages/home/home'

function App() {
  const media:EMediaQuery = (useMediaQuery({ query: '(min-width: 768px)' }) ? EMediaQuery.DESKTOP : EMediaQuery.MOBILE);
    
  return (
    <MediaQueryContext.Provider value={{...{media}}}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="messages" element={<Messages />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MediaQueryContext.Provider>
  )
}

export default App
