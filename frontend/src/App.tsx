import { BrowserRouter, Route, Routes } from 'react-router'
import { Dashboard } from './pages/dashboard/dashboard'
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
          </Route>
        </Routes>
      </BrowserRouter>
    </MediaQueryContext.Provider>
  )
}

export default App
