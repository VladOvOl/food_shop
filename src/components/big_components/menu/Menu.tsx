import  {FC} from 'react'
import style from './Menu.module.scss'
import { useDispatch } from 'react-redux'
import { changeStateMenuBtn } from '../../../redux/slices/menuToolkitSlice'
import { useAppSelector } from '../../../redux/hooks'
import { Link } from 'react-router-dom'

const  Menu:FC =()=> {

    /*<div className={style.containerHeader}>
                <Link className={style.containerBtn} to={'/'}>
                    <img src={require('../../../assets/icons/menuWhite.png')} alt="" />
                </Link>

                <div className={style.containerLogo}>
                        <img src={require('../../../assets/icons/logo.png')} alt="" height={55} width={55}/>
                    <div className={style.containerTitle}>
                        <p className={style.title}>REACT PIZZA</p>
                        <p className={style.underTitle}>Найкраща піцца у нас!</p>
                    </div>
                </div>
            </div>*/



  return (
    <div className={style.container}>
            <div className={style.containerLink}>
                <img src={require('./icons/home.png')} alt="" />
                <img src={require('./icons/combo.png')} alt="" />
                <img src={require('./icons/pizza.png')} alt="" />
                <img src={require('./icons/sushi.png')} alt="" />
                <img src={require('./icons/burger.png')} alt="" />
                <img src={require('./icons/combo.png')} alt="" />
                <img src={require('./icons/ramen.png')} alt="" />
                <img src={require('./icons/soup.png')} alt="" />
                <img src={require('./icons/ramen.png')} alt="" />
                <img src={require('./icons/salad.png')} alt="" />
            </div>
        </div>
  )
}

export default Menu

