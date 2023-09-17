import { FC,useState } from "react"
import style from './BasketMini.module.scss'
import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { changeStateBasketBtn, changeStateBasketMiniBtn } from "../../../redux/slices/menuToolkitSlice"



const BasketMini:FC = () => {

    let totalCount = useAppSelector(state => state.menuToolkit.totalCount)
    let dispatch = useAppDispatch()

  return (
    <div className={style.container}>
        <div className={style.containerImg}>
            <NavLink to={'/basket'}>
                <img src={require('./assets/icons/basket_mini.png')} 
                onClick={e=>dispatch(changeStateBasketMiniBtn(true))}alt="" />
            </NavLink>
            <p>{totalCount}</p>
        </div>
    </div>
  )
}

export default BasketMini