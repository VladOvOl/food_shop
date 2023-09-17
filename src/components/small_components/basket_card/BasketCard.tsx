import {FC} from 'react'
import style from './BasketCard.module.scss'
import { useDispatch } from 'react-redux'
import { removeFromBasket,addToArrBasket } from '../../../redux/slices/menuToolkitSlice'
import { IArrBasket } from '../../../redux/slices/menuToolkitSlice'


const BasketItem:FC<IArrBasket> = (props)=> {

    let dispatch = useDispatch()

    let size
    if(props.size===1){
         size='30cм'
    }
    if(props.size ===2){
       size='40cм'
    }
    if(props.size===3){
       size='50cм'
    }
   
  return (
    <div className={style.container}>
        <div className={style.containerImgText}>
            <img src={props.img} alt="" />
            <div className={style.containerText}>
                <p className={style.title}>{props.title}</p>
                <p className={style.underTitle}>{props.dougth ? <span>тонке</span> :<span>традиційне</span> }тісто , {size}</p>
            </div>
        </div>

        <div className={style.containerCount}>
            <img src={require('../../../assets/icons/minus.png')}
             onClick={()=>dispatch(removeFromBasket(props))}alt="" />
            <div className={style.containercount}>
                <p className={style.count}>{props.count}</p>
            </div>
            <img src={require('../../../assets/icons/plus.png')} 
            onClick={()=>dispatch(addToArrBasket(props))}alt="" />
        </div>

        <div className={style.containerPrice}>
            <p>{props.count ? props.price*props.count : props.price}грн</p>
        </div>

        <div className={style.containerDeleteBtn}>
            <img src={require('../../../assets/icons/deleteBtn.png')} alt="" />
        </div>
        
    </div>

    
  )
}

export default BasketItem