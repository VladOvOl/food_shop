import {FC} from 'react'
import { ICard } from '../../../types/Types'
import style from './CardCarcas.module.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch,useAppSelector } from '../../../redux/hooks'
import { addToArrBasket } from '../../../redux/slices/menuToolkitSlice'



const Card:FC<ICard> = (props) => {

    const dispatch = useAppDispatch()
    let food = useAppSelector(state=>state.menuToolkit.arrBasket.find((obj)=>obj.title == props.title))

  return (
    <div className={style.container} >

    <img className={style.img}src={props.img} alt=""/>
    
    <p className={style.title}>{props.title}</p>

    <div className={style.containerBottom}>

        <div className={style.containerPrice}>
            <p className={style.price}>від {props.price}</p>
            <img src={require('../../../assets/icons/hrivniaBlack.png')} alt="" height={28}/>
        </div>
        

        <div className={style.containerBtn}
        onClick={()=>dispatch(addToArrBasket(
            {
            img:props.img,
            title:props.title,
            price:props.price}
            ))}>
            <p>+ Добавить</p>
            < p className={style.count}>{food?.count ? food.count : 0}</p>
        </div>
    </div>
</div>
  )
}

export default Card