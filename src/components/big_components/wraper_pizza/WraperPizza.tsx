import {FC,useEffect,useState} from 'react'
import style from './WraperPizza.module.scss'
import axios from 'axios'
import CardPizza from '../../small_components/card_pizza/CardPizza'
import { ICardPizza } from '../../../types/Types'
import { useAppSelector } from '../../../redux/hooks'

const Wraper:FC = () => {
    let sortState = useAppSelector(state => state.menuToolkit.stateSortValue)
    let inputState = useAppSelector(state => state.menuToolkit.stateInputValue)
    let[data,setData] = useState<ICardPizza[]>([])
    let [length,setLength] = useState<number>()
    let sort:string
    
    if(sortState=="найпопулярніші"){
      sort = ''
    }
    if(sortState=="по ціні"){
      sort = 'smallPrice'
    }
    if(sortState=="по алфавіту"){
      sort = 'title'
    }
    

    useEffect(()=>{
      axios.get(`https://64ecacbbf9b2b70f2bfac529.mockapi.io/pizza`).then((res)=>setLength(res.data.length)).catch(error => {
        // handle any errors/rejected Promises
      })
    },[])

    console.log(length)

    useEffect(()=>{
      axios.get(`https://64ecacbbf9b2b70f2bfac529.mockapi.io/pizza?sortBy=${sort}&title=${inputState}&limit=8&page=1`).then((res)=>setData(res.data)).catch(error => {
        // handle any errors/rejected Promises
      })
    },[inputState,sortState])

  return (
    <div className={style.container}>
        {data.map((obj)=><CardPizza key={obj.id}id={obj.id} img={obj.img} 
            title={obj.title} smallPrice={obj.smallPrice}
            mediumPrice={obj.mediumPrice} bigPrice={obj.bigPrice}/>)}

    </div>
  )
}

export default Wraper
