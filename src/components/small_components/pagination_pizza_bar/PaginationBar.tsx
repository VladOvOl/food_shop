import style from './Paginationbar.module.scss'
import {FC} from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { changePizzapaginationCount } from '../../../redux/slices/menuToolkitSlice'

const PaginationBar :FC= () => {

  let dispatch = useAppDispatch()
  let page = useAppSelector(state => state.menuToolkit.statePizzaPaginationLength)
  let currentPage = useAppSelector(state => state.menuToolkit.statePizzaPaginationCount)
  const arr = Array.from({length: page}, (_, index) => index + 1);


  return (
    <div className={style.container}>
      {arr.map((obj,index)=><p  key = {index}className={currentPage == obj ? style.active : style.passive} onClick={()=>dispatch(changePizzapaginationCount(obj))}>{obj}</p>)}  
    </div>
  )
}

export default PaginationBar