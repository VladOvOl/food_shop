import {FC,useEffect,useState,useRef} from 'react'
import style from './Sortbar.module.scss'
import axios from 'axios'
import { ICard } from '../../../types/Types'
import { useAppDispatch } from '../../../redux/hooks'
import { changeStateForSearch, changeStateForSort, } from '../../../redux/slices/menuToolkitSlice'

const Sortbar:FC = () => {

    let[stateBtnSort,setStateBtnSort]= useState(false)
    let [stateSort,setStateSort] = useState('найпопулярніші')
    let [stateInput,setStateInput] = useState('')
    let dispatch = useAppDispatch()
    
    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setStateInput(e.target.value)
        dispatch(changeStateForSearch(e.target.value))
    }

    const onChangeSort = (e:string) =>{
        setStateSort(e)
        dispatch(changeStateForSort(e))
    }
    /*
    const sortRef = useRef(null)

    useEffect(()=>{
        const handleClickOutSide = (event:MouseEvent)=>{
            const _event = event as MouseEvent &{
                path : Node[]
            }
            if(sortRef.current && !_event.path.includes(sortRef.current)){
                console.log(sortRef.current)
            }
        }
        document.body.addEventListener('click',handleClickOutSide) 

        return ()=> document.body.removeEventListener('click',handleClickOutSide)
    },[])
    */
   
  return (
    <div className={style.container}>
        <div className={style.containerSearch}>
            <div className={style.containerInput}>
                <img src={require('../../../assets/icons/loop.png')} alt="" width={30}/>
                <input type="search" placeholder='Пошук ...' onChange={(e)=>onChangeInput(e)} value={stateInput}/>
            </div>
        </div>
        

        <div className={style.containerSort} onClick={()=>setStateBtnSort(!stateBtnSort)}>
            <img className={stateBtnSort?style.imgActive:''} src={require('../../../assets/icons/sort.png')}  alt=""width={10} height={5.62} />
            <p className={style.text}>Сортувати за :</p> <span className={style.underline}>{stateSort}</span>

            <div className={stateBtnSort?style.containerMenuActive:style.containerMenuPassive}>
                <p onClick={()=>onChangeSort("найпопулярніші")}>по полярності</p>
                <p onClick={()=>onChangeSort("по ціні")}> по ціні </p>
                <p onClick={()=>onChangeSort("по алфавіту")}> по алфавіту</p>
            </div>
        </div>
    </div>
  )
}

export default Sortbar