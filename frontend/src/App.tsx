import { BrowserRouter, Route, Routes } from 'react-router'
import { Dashboard } from './pages/dashboard/dashboard'
import { MainLayout } from './pages/layouts/main'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="home" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
