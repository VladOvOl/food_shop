import {FC} from 'react'
import style from './PizzaPage.module.scss'
import Wraper from '../../components/big_components/wraper_pizza/WraperPizza'
import Sortbar from '../../components/big_components/sortbar/Sortbar'
import Footer from '../../components/big_components/footer/Footer'
import PaginationBar from '../../components/small_components/pagination_pizza_bar/PaginationBar'

const PizzaPage:FC = () => {


  return (
    <div className={style.container}>
        <Sortbar/>
        <div className={style.containerMain}>
          <Wraper/>
        </div>
        <PaginationBar/>
    </div>
        

    
  )
}

export default PizzaPage