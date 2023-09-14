import {FC,useEffect,useState} from 'react'
import style from './WraperPizza.module.scss'
import axios from 'axios'
import CardPizza from '../../small_components/card_pizza/CardPizza'
import { ICardPizza } from '../../../types/Types'

const Wraper:FC = () => {

 /*   interface ICard{
        id:number,
        img:string,
        title:string,
        smallPrice:number,
        mediumPrice:number,
        bigPrice:number

    }
*/

    let[data,setData] = useState<ICardPizza[]>([])

    useEffect(()=>{
      axios.get("https://64ecacbbf9b2b70f2bfac529.mockapi.io/pizza").then((res)=>setData(res.data)).catch(error => {
        // handle any errors/rejected Promises
      })
    },[])

  return (
    <div className={style.container}>
        {data.map((obj)=><CardPizza key={obj.id}id={obj.id} img={obj.img} 
            title={obj.title} smallPrice={obj.smallPrice}
            mediumPrice={obj.mediumPrice} bigPrice={obj.bigPrice}/>)}

    </div>
  )
}

export default Wraper
