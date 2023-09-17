import {FC, useState} from 'react'
import style from './Header.module.scss'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { changeStateBasketBtn, changeStateMenuBtn } from '../../../redux/slices/menuToolkitSlice'
import BasketMini from '../../small_components/mini_basket/BasketMini'


const Header:FC = () => {
    let dispatch = useAppDispatch()

    let stateBasketContainer = useAppSelector(state => state.menuToolkit.stateMenuBtn)
    let statebasketMiniBtn = useAppSelector(state => state.menuToolkit.stateBasketMiniBtn)
    let totalCount = useAppSelector(state=>state.menuToolkit.totalCount)
    let totalPrice = useAppSelector(state => state.menuToolkit.totalPrice)

    let location = useLocation()

    let[btn,setBtn]=useState(false)
    let navigate = useNavigate()
    let goBack =()=> navigate(-1)

    function closeMenu(){
        goBack();
        dispatch(changeStateMenuBtn())
    }

    return (
    <header className={style.container}>


        {
            stateBasketContainer ? <div className={style.containerBack} onClick={()=>closeMenu()}>
                    <img src={require('../../../assets/icons/icons8-назад-100.png')} alt="" width={30} height={30}/>
                </div> :
        <Link className={style.containerMenu} to={'/menu'} 
        onClick={()=>dispatch(changeStateMenuBtn())}>
            <img src={require('../../../assets/icons/menu.png')}  alt="" />
        </Link>
}
        <div className={style.containerLogo}>
            <img src={require('../../../assets/icons/logo.png')} alt="" height={55} width={55}/>
            <div className={style.containerTitle}>
                <p className={style.title}>REACT PIZZA</p>
                <p className={style.underTitle}>Найкраща піцца у нас!</p>
            </div>
        </div>

        <NavLink className={style.basketLink}to={'/basket'}>
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

        {location.pathname !== '/basket' && <BasketMini/>}
    </header>
  )
}

export default Header