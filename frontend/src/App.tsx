import { BrowserRouter, Route, Routes } from 'react-router'
import { Dashboard } from './pages/dashboard/dashboard'
import Login from './pages/login/login'
import { MainLayout } from './pages/layouts/main'
import './index.css'
import { MediaQueryContext } from './context/media'
import { EMediaQuery } from './enums/media'
import { useMediaQuery } from 'react-responsive'

function App() {
  const media:EMediaQuery = (useMediaQuery({ query: '(min-width: 768px)' }) ? EMediaQuery.DESKTOP : EMediaQuery.MOBILE);
    
  return (
    <MediaQueryContext.Provider value={{...{media}}}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="home" element={<Dashboard />} />
            <Route path="diary" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="chat" element={<Dashboard />} />
            <Route path="profile" element={<Dashboard />} />
            <Route path="settings" element={<Dashboard />} />
            <Route path="map" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MediaQueryContext.Provider>
  )
}

export default App
