import {FC, useEffect, useState } from 'react'
import style from './CardPizza.module.scss'
import { ICardPizza } from '../../../types/Types'
import { addToArrBasket } from '../../../redux/slices/menuToolkitSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { Link } from 'react-router-dom'
 
const CardPizza:FC<ICardPizza> = (props) => {

    const dispatch = useAppDispatch()
    const pizzaCount = useAppSelector((state) => state.menuToolkit.arrBasket.find((obj)=>obj.title == props.title))
    //const pizzaCount2 = useSelector((state) => state.menuToolkit.arrBasket)
    let[stateDougth,setStateDought] = useState(false)
    let[stateSize,setStateize] = useState(1)

    const adedPizza = pizzaCount ? pizzaCount.count : 0

       //console.log(pizzaCount)

    
    let price:number=props.smallPrice
    if(stateSize===3){
         price=props.bigPrice
    }
    if(stateSize ===2){
        price=props.mediumPrice
    }
    if(stateSize===1){
        price=props.smallPrice
    }

  return (
    <div className={style.container} >

        <Link to={`/pizza/${props.id}`}><img className={style.img}src={props.img} alt=""/></Link>
        
        <p className={style.title}>{props.title}</p>

        <div className={style.containerMenu}>

            <div className={style.containerDough}>
                <button  className={stateDougth ? [style.button , style.btnActive].join(' '):style.button} 
                onClick={()=>setStateDought(!stateDougth)}>тонке</button>
                <button className={stateDougth ? style.button :[style.button , style.btnActive].join(' ')}
                onClick={()=>setStateDought(!stateDougth)}> традиційне</button>
            </div>

            <div className={style.containerSize}>
                <button className={stateSize === 1 ? [style.button , style.btnActive].join(' '):style.button}
                onClick={()=>setStateize(1)}>30 см </button>
                <button className={stateSize === 2 ? [style.button , style.btnActive].join(' '):style.button}
                onClick={()=>setStateize(2)}>40 см </button>
                <button className={stateSize === 3 ? [style.button , style.btnActive].join(' '):style.button}
                onClick={()=>setStateize(3)}>50 см </button>
            </div>
        </div>

        <div className={style.containerBottom}>

            <div className={style.containerPrice}>
                <p className={style.price}>від {price}</p>
                <img src={require('../../../assets/icons/hrivniaBlack.png')} alt="" height={28}/>
            </div>
            

            <div className={style.containerBtn}
            onClick={()=>dispatch(addToArrBasket(
                {
                id:props.id,
                img:props.img,
                title:props.title,
                dougth:stateDougth,
                size:stateSize,
                price:price}
                ))}>
                <p>+ Добавить</p>
                < p className={style.count}>{adedPizza}</p>
            </div>
        </div>
    </div>
  )
}

export default CardPizza