import {FC} from 'react'
import style from './PizzaPage.module.scss'
import Wraper from '../../components/big_components/wraper_pizza/WraperPizza'
import Sortbar from '../../components/big_components/sortbar/Sortbar'

const PizzaPage:FC = () => {
  return (
    <div className={style.container}>
        <Sortbar/>
        <Wraper/>
    </div>
        

    
  )
}

export default PizzaPage