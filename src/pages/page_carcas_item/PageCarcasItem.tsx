import style from './PageCarcasItem.module.scss'
import {FC,useState,useEffect, Component} from 'react'
import { ICard} from '../../types/Types'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addToArrBasket } from '../../redux/slices/menuToolkitSlice'

const PageCarcasItem:FC = () => {

  
    let[data,setData] = useState<ICard[]>()
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

  

  
    useEffect(()=>{
      axios.get(`https://64ecacbbf9b2b70f2bfac529.mockapi.io/food?title=${title}`).then((res)=>setData(res.data)).catch(error => {
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
  
                <div className={style.containerBottom}>
  
                  <div className={style.containerPrice}>
                      <p className={style.price}>від {data[0].price}</p>
                      <img src={require('../../assets/icons/hrivniaBlack.png')} alt="" height={28}/>
                  </div>
  
  
                  <div className={style.containerBtn}
                  onClick={()=>data && dispatch(addToArrBasket(
                      {
                      img:data[0].img,
                      title:data[0].title,
                      price:data[0].price}
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

export default PageCarcasItem