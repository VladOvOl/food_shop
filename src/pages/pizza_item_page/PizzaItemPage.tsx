import style from './PizzaItemPage.module.scss'
import {FC,useState,useEffect, Component} from 'react'
import { ICardPizza } from '../../types/Types'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addToArrBasket } from '../../redux/slices/menuToolkitSlice'




const PizzaItemPage:FC = () => {

  interface ICardItemPizza extends ICardPizza{
    ingridients:string,

  }
  let[data,setData] = useState<ICardItemPizza[]>()
  const{title}=useParams()
  const dispatch = useAppDispatch()
  const pizzaCount = useAppSelector((state) => state.menuToolkit.arrBasket.find((obj)=> data && obj.title == data[0].title))
  let[stateDougth,setStateDought] = useState(false)
  let[stateSize,setStateize] = useState(1)
  const adedPizza = pizzaCount ? pizzaCount.count : 0
  
  let navigate = useNavigate()
  let goBack =()=> {
    navigate(-1)
    
 }

  let price:number=1
  if(data){
    
    if(stateSize===3){
        price=data[0].bigPrice
    }
    if(stateSize ===2){
        price=data[0].mediumPrice
    }
    if(stateSize===1){
        price=data[0].smallPrice
    }
  }




  useEffect(()=>{
    axios.get(`https://64ecacbbf9b2b70f2bfac529.mockapi.io/pizza?title=${title}`).then((res)=>setData(res.data)).catch(error => {
      // handle any errors/rejected Promises
    })
  },[])

    if(data){
      return (
        <div className={style.container}>
             
          <div className={style.containerImg}>
            <img className={style.img}src={data[0].img} alt="" />
          </div>
    
          <div className={style.containerMain}>
            <div className={style.containerTitle}>
              <h1>{data[0].title}</h1>
            </div>
            <div className={style.containerIngredients}>
              <p>{data[0].ingridients}</p>
            </div>

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
                    <img src={require('../../assets/icons/hrivniaBlack.png')} alt="" height={28}/>
                </div>


                <div className={style.containerBtn}
                onClick={()=>data && dispatch(addToArrBasket(
                    {
                    id:data[0].id,
                    img:data[0].img,
                    title:data[0].title,
                    dougth:stateDougth,
                    size:stateSize,
                    price:price}
                    ))}>
                    <p>+ Добавить</p>
                    < p className={style.count}>{adedPizza}</p>
                </div>
               
            </div>
            <div className={style.containerBtn2} 
                        onClick={()=>goBack()}>
                            <img src={require('../../assets/icons/backLink.png')} alt="" />
                            <p>Повернутися назад</p>
                        </div>
                </div>
        </div>
      )

    }
      else
    {
      return<></>
    }

  
    
  
}

export default PizzaItemPage