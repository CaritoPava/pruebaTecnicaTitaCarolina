import { Route, Routes } from 'react-router-dom'
import { MainView } from '../components/main/MainView'
import { PostByTags } from '../components/main/PostByTags'

export const MainRouter = () => {
  return (
    <div >
      <div >
        <p>Barra de navegacion</p>
      </div>
      <div >
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="tag" element={<PostByTags />} />
        </Routes>
      </div>
      <div >
        <p>Footer</p>
      </div>
    </div>
  )
}