import {FC,useState,useEffect} from 'react'
import WraperCanvas from '../../components/big_components/wraper_carcas/WrapeCarcas'
import Sortbar from '../../components/big_components/sortbar/Sortbar'
import style from './PageCarcas.module.scss'
import PaginationCarcasBar from '../../components/small_components/pagination_carcas_bar/PaginationCarcasBar'
import { useAppSelector } from '../../redux/hooks'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Page:FC = () => {
  /*
  let [length,setLength] = useState<number>(0)
  const{type}=useParams()

  useEffect(()=>{
    axios.get(`https://64ecacbbf9b2b70f2bfac529.mockapi.io/food/?type=${type}`).then((res)=>setLength(res.data.length)).catch(error => {
      // handle any errors/rejected Promises
    })
  },[length])

  console.log("carcas")
  console.log(length)
  */
  return (
    <div className={style.container}>
        <Sortbar/>
        <div className={style.containerMain}>
          <WraperCanvas/>
        </div>
        <PaginationCarcasBar /*length={Math.ceil(length/4)}*//>
    </div>
  
  )
}

export default Page