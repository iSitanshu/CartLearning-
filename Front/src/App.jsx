import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import Detail from './Pages/Detail'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/:slug' element={<Detail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App