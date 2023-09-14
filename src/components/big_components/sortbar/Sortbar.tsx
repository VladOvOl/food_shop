import {FC,useState} from 'react'
import style from './Sortbar.module.scss'

const Sortbar:FC = () => {

    let[stateBtnSort,setStateBtnSort]= useState(false)
    let [stateSort,setStateSort] = useState('найпопулярніші')

  return (
    <div className={style.container}>
        <div className={style.containerSearch}>
            <div className={style.containerInput}>
                <img src={require('../../../assets/icons/loop.png')} alt="" width={30}/>
                <input type="search" placeholder='Пошук ...' />
            </div>
        </div>
        

        <div className={style.containerSort}>
            <img className={stateBtnSort?style.imgActive:''} src={require('../../../assets/icons/sort.png')} 
            onClick={()=>setStateBtnSort(!stateBtnSort)}  alt=""width={10} height={5.62} />
            <p className={style.text}>Сортувати за :</p> <span className={style.underline}>{stateSort}</span>

            <div className={stateBtnSort?style.containerMenuActive:style.containerMenuPassive}>
                <p onClick={()=>setStateSort("найпопулярніші")}>по полярності</p>
                <p onClick={()=>setStateSort("по ціні")}> по ціні </p>
                <p onClick={()=>setStateSort("по алфавіту")}> по алфавіту</p>
            </div>
        </div>
    </div>
  )
}

export default Sortbar