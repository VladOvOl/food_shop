import {FC} from 'react'
import WraperCanvas from '../../components/big_components/wraper_carcas/WrapeCarcas'
import Sortbar from '../../components/big_components/sortbar/Sortbar'
import style from './PageCarcas.module.scss'

const Page:FC = () => {


  return (
    <div className={style.container}>
        <Sortbar/>
        <WraperCanvas/>
    </div>
  )
}

export default Page