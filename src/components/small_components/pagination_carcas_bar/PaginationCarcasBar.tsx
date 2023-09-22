import {FC,useState,useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import style from '../pagination_pizza_bar/Paginationbar.module.scss'
import { changeCarcaspaginationCount2, changePizzapaginationCount } from '../../../redux/slices/menuToolkitSlice'
import { useLocation } from 'react-router-dom'
import { IPagination } from '../../../types/Types'

const PaginationCarcasBar:FC = () => {

    const location = useLocation()
    let dispatch = useAppDispatch()
    const paginationArr = useAppSelector(state => state.menuToolkit.paginationArr.filter((obj)=>obj.pathname==location.pathname))
    //let page = useAppSelector(state => state.menuToolkit.stateCarcasPaginationLength)
    //let currentPage = useAppSelector(state => state.menuToolkit.stateCarcasPaginationCount)
    //let currentPage = useAppSelector(state => state.menuToolkit.paginationArr.filter((obj)=> obj.pathname === location.pathname))
    //let[pagePag,setPagePag] = useState<number>(0)
/*
    useEffect(()=>{
      paginationArr.map((obj)=>obj.pathname==location.pathname && setPagePag(obj.length))
      console.log(pagePag)  
    },[pagePag])
*/
    const arrLength = Array.from({length: paginationArr[0].length}, (_, index) => index + 1);
   /* 
    dispatch(changeCarcaspaginationCount2({
      pathname:location.pathname,
      current:3,
      length:4
    }))
  */

    function functionOnClick(obj:IPagination){
      dispatch(changeCarcaspaginationCount2(obj))
    }

    return (
      
      <div className={style.container}>
        {arrLength.map((obj)=><p key={obj} className={paginationArr[0].current == obj ? style.active : style.passive} 
        onClick={()=>functionOnClick(
          {pathname:location.pathname,
          current:obj,
          length:2
        })}>{obj}</p>)}  
      </div>
  )
}

export default PaginationCarcasBar