import {FC, useState} from 'react'
import style from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { changeStateBasketBtn, changeStateMenuBtn } from '../../../redux/slices/menuToolkitSlice'
import Menu from '../menu/Menu'

const Header:FC = () => {
    let dispatch = useAppDispatch()

    let stateBasketContainer = useAppSelector(state => state.menuToolkit.stateMenuBtn)
    let totalCount = useAppSelector(state=>state.menuToolkit.totalCount)
    let totalPrice = useAppSelector(state => state.menuToolkit.totalPrice)

    let[btn,setBtn]=useState(false)
   

    return (
    <header className={style.container}>

        <Link className={style.containerMenu} to={btn?'/':'/menu'} 
        onClick={()=>setBtn(!btn)}>
            <img src={require('../../../assets/icons/menu.png')}  alt="" />
        </Link>

        <div className={style.containerLogo}>
            <img src={require('../../../assets/icons/logo.png')} alt="" height={55} width={55}/>
            <div className={style.containerTitle}>
                <p className={style.title}>REACT PIZZA</p>
                <p className={style.underTitle}>Найкраща піцца у нас!</p>
            </div>
        </div>

        <NavLink to={'/basket'}>
            <div className={style.containerBasket/*stateBasketContainer ? [style.containerBasket , style.disable].join('  ') : style.containerBasket*/}>
                <div className={style.containerPrice}>
                    <p>{totalPrice}</p>
                    <img src={require('../../../assets/icons/hrivniaWht.png')} alt="" height={20} width={20}/>
                </div>

                <div className={style.containerBasketCount} >
                    <img src={require('../../../assets/icons/basket.png')} alt="" height={30} width={30}/>
                    <p>{totalCount}</p>
                </div>
            </div>
        </NavLink>

        {stateBasketContainer && <Menu/>}
    </header>
  )
}

export default Header