import { BrowserRouter, Route, Routes } from 'react-router'
import { Dashboard } from './pages/dashboard/dashboard'
import Login from './pages/login/login'
import { MainLayout } from './pages/layouts/main'
import './index.css'

//temporary
import Messages from './pages/messages/Messages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="home" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
