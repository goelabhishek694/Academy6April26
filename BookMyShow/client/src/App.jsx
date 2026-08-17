import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'
import ProtectedRoute from './components/ProtectedRoute'
import Partner from './pages/Partner'
import User from './pages/User'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>} />
        <Route path='/partner' element={<ProtectedRoute><Partner/></ProtectedRoute>} />
        <Route path='/user' element={<ProtectedRoute><User/></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
