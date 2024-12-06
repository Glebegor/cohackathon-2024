import { BrowserRouter, Route, Routes } from 'react-router'
import { Dashboard } from './pages/dashboard/dashboard'
import Login from './pages/login/login'
import { MainLayout } from './pages/layouts/main'
import './index.css'
import { EMediaQuery, ETheme } from './enums/design'
import { useMediaQuery } from 'react-responsive'
import { DesignContext } from './context/design'
import Messages from './pages/messages/Messages'
import Home from './pages/home/home'

function App() {
  const media:EMediaQuery = (useMediaQuery({ query: '(min-width: 768px)' }) ? EMediaQuery.DESKTOP : EMediaQuery.MOBILE);
  const theme:ETheme = ETheme.MODERN;
    
  return (
    <DesignContext.Provider value={{...{media, theme}}}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="home" element={<Dashboard />} />
            <Route path="messages" element={<Messages />} />
            <Route path="messages" element={<Messages />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DesignContext.Provider>
  )
}

export default App
