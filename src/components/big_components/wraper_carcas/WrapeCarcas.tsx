import {FC,useEffect,useState} from 'react'
import style from './Wraper.module.scss'
import axios from 'axios'
import { ICard } from '../../../types/Types'
import { useParams } from 'react-router-dom'
import Card from '../../small_components/card_carcas/CardCarcas'


const Wraper:FC = () => {

    const{type}=useParams()
    let[data,setData] = useState<ICard[]>([])

    useEffect(()=>{
      axios.get(`https://64ecacbbf9b2b70f2bfac529.mockapi.io/food/?type=${type}`).then((res)=>setData(res.data)).catch(error => {
        // handle any errors/rejected Promises
      })
    },[type])
    
    
  return (
    
    <div >
        {data.map((obj)=><Card key={obj.title}  img={obj.img} 
            title={obj.title} price={obj.price}/>)}

    </div>
    
   
  )
}

export default Wraper
