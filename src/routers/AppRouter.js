import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { MainRouter } from './MainRouter'


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/*' element={<AuthRouter />} />
        <Route path='/*' element={<MainRouter />} />
      </Routes>
    </BrowserRouter>

  )
}
