import {FC} from 'react'
import style from './BasketPage.module.scss'
import { useNavigate } from 'react-router-dom'
import BasketItem from '../../components/small_components/basket_card/BasketCard'
import { useAppDispatch,useAppSelector } from '../../redux/hooks'
import { changeStateBasketMiniBtn, clearBasket } from '../../redux/slices/menuToolkitSlice'

const Basket:FC =()=> {

 let pizza = useAppSelector(state=>state.menuToolkit.arrBasket)
 let totalCount = useAppSelector(state=>state.menuToolkit.totalCount)
 let totalPrice = useAppSelector(state=>state.menuToolkit.totalPrice)

 

 let dispatch = useAppDispatch()
 let navigate = useNavigate()
 let goBack =()=> {
    navigate(-1)
    dispatch(changeStateBasketMiniBtn(false))
 }


  return (
        <div className={style.container}>
          
            <div className={style.wraper}>
                <div className={style.containerTop}>
                    <div className={style.containerLogo}>
                        <img src={require('../../assets/icons/basketLogo.png')} alt="" />
                        <span>Покупки</span>
                    </div>

                    <img className={style.img}src={require('../../assets/icons/clearBasket.png')}
                    onClick={()=>dispatch(clearBasket())} alt="" width={169} height={23}/>
                </div>

                {pizza.length > 0 ?
                <div className={style.containerPizzaList}>

                    {pizza.map((card)=><BasketItem key={card.id} id={card.id} img={card.img} 
                    title={card.title}  dougth={card.dougth} price={card.price} size={card.size} count={card.count}/>)}
                   
                </div>

                : <div className={style.containerEmptyImg}>
                    <img className={style.emptyImg}src={require('../../assets/img/shopping-cart-colour.png')} alt="" />
                  </div>
                }
                <div className={style.containerBottom}>
                    <div className={style.containerFirst}>
                        <span className={style.amountPizza}>Всі піцци: {totalCount}шт</span>
                        <span className={style.totalPrice}>Сума замовдення: {totalPrice}</span>
                    </div>

                    <div className={style.containerSecond}>
                        <div className={style.containerLink} 
                        onClick={()=>goBack()}>
                            <img src={require('../../assets/icons/backLink.png')} alt="" />
                            <p>Повернутися назад</p>
                        </div>
                        
                        <button>Заплатитти зараз</button>
                    </div>
                    
                </div>
            </div>
            
        </div>

    
  )
}

export default Basket