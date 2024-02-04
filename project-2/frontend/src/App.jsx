import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateInfo from './pages/CreateInfo'
import ShowInfo from './pages/ShowInfo'
import UpdateInfo from './pages/UpdateInfo'
import DeleteInfo from './pages/DeleteInfo'
import { Provider } from "react-redux";
import {persistor, store} from './redux/Store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/info/create' element={<CreateInfo />} />
      <Route path='/info/details/:id' element={<ShowInfo />} />
      <Route path='/info/edit/:id' element={<UpdateInfo />} />
      <Route path='/info/delete/:id' element={<DeleteInfo />} />
    </Routes>
    </PersistGate>
    </Provider>
  )
}

export default App
