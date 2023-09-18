import {FC} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import PizzaPage from './pages/pizza_page/PizzaPage'
import HomePage from './pages/home_page/HomePage'
import BasketPage from './pages/basket_page/BasketPage'
import PageCarcas from './pages/page_carcas/PageCarcas'
import PizzaItemPage from './pages/pizza_item_page/PizzaItemPage'
import Menu from './components/big_components/menu/Menu'
import PageCarcasItem from './pages/page_carcas_item/PageCarcasItem'

const App:FC = () => {

  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/pizza' element={<PizzaPage />}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/pizza/:title' element={<PizzaItemPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/:type' element={<PageCarcas/>}/>
        <Route path='/:type/:title' element={<PageCarcasItem/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App