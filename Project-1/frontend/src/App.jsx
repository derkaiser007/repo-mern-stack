import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateInfo from './pages/CreateInfo'
import ShowInfo from './pages/ShowInfo'
import UpdateInfo from './pages/UpdateInfo'
import DeleteInfo from './pages/DeleteInfo'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/info/create' element={<CreateInfo />} />
      <Route path='/info/details/:id' element={<ShowInfo />} />
      <Route path='/info/edit/:id' element={<UpdateInfo />} />
      <Route path='/info/delete/:id' element={<DeleteInfo />} />
    </Routes>
  )
}

export default App
