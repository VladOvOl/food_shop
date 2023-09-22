import {FC,useEffect,useState} from 'react'
import style from './WraperCarcas.module.scss'
import axios from 'axios'
import { ICard } from '../../../types/Types'
import { useLocation, useParams } from 'react-router-dom'
import Card from '../../small_components/card_carcas/CardCarcas'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'



const Wraper:FC = () => {

    const{type}=useParams()
    let location = useLocation()
    //let page = useAppSelector(state => state.menuToolkit.stateCarcasPaginationCount)
    let page = useAppSelector(state => state.menuToolkit.paginationArr.filter((obj)=>obj.pathname==location.pathname))
    let sortState = useAppSelector(state => state.menuToolkit.stateSortValue)
    let inputState = useAppSelector(state => state.menuToolkit.stateInputValue)
    let[data,setData] = useState<ICard[]>([])
    let sort:string

    if(sortState=="найпопулярніші"){
      sort = ''
    }
    if(sortState=="по ціні"){
      sort = 'price'
    }
    if(sortState=="по алфавіту"){
      sort = 'title'
    }


    useEffect(()=>{
      axios.get(`https://64ecacbbf9b2b70f2bfac529.mockapi.io/food/?type=${type}&limit=12&page=${page[0].current}&sortBy=${sort}&title=${inputState}`).then((res)=>setData(res.data)).catch(error => {
        // handle any errors/rejected Promises
      })
    },[type,page[0].current,inputState,sortState])

      
    
  return (
    
    <div className={style.container}>
        {data.map((obj)=><Card key={obj.title}  img={obj.img} 
            title={obj.title} price={obj.price}/>)}

    </div>
    
   
  )
}

export default Wraper
