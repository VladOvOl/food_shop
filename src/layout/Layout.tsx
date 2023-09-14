import {FC} from 'react'
import style from './Layout.module.scss'
import Header from '../components/big_components/header/Header'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/big_components/navbar/Navbar'


const Layout:FC =() => {

  return (
        <div className={style.container}>
            <Header/>
            <Navbar/>
            <Outlet/>
        </div>      
  )
}

export default Layout