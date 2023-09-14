import {FC} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import PizzaPage from './pages/pizza_page/PizzaPage'
import HomePage from './pages/home_page/HomePage'
import BasketPage from './pages/basket_page/BasketPage'
import PageCarcas from './pages/page_carcas/PageCarcas'
import PizzaItem from './pages/pizza_page/PizzaItem'
import Menu from './components/big_components/menu/Menu'

const App:FC = () => {

  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/pizza' element={<PizzaPage />}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/pizza/:id' element={<PizzaItem/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/:type' element={<PageCarcas/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App