import { Routes, Route } from 'react-router-dom'
import { LoginView } from '../components/auth/LoginView'
import { RegisterView } from '../components/auth/RegisterView'

export const AuthRouter = () => {
  return (
    <div className='auth__main'>
      <div className='auth__box-container'>
        <Routes >
          <Route path='login' element={<LoginView />} />
          <Route path='register' element={<RegisterView />} />
        </Routes>
      </div>
    </div>
  )
}
