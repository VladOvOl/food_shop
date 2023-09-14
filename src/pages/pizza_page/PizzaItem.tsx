import {FC,useState,useEffect} from 'react'
import { ICardPizza } from '../../types/Types'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PizzaItem:FC = () => {

    let[data,setData] = useState<ICardPizza>()
    const{id}=useParams()

    useEffect(()=>{
      axios.get(`https://64ecacbbf9b2b70f2bfac529.mockapi.io/pizza/${id}`).then((res)=>setData(res.data)).catch(error => {
        // handle any errors/rejected Promises
      })
    },[])

  return (
    <div>PizzaItem{id}</div>
  )
}

export default PizzaItem