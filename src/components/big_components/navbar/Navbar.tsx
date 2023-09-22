import {FC,useState} from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.scss'


export const Navbar:FC = () => {



  return (

            <div className={style.container}>
                <NavLink  to={'/'}className={style.link}>Home</NavLink>
                <NavLink  to={'/combo'}className={({isActive})=>isActive ? style.activeLink :style.link}>Combo</NavLink>
                <NavLink  to={'/pizza'}className={({isActive})=>isActive ? style.activeLink :style.link}>Pizza</NavLink>
                <NavLink  to={'/sushi'}className={({isActive})=>isActive ? style.activeLink :style.link}>Sushi</NavLink>
                <NavLink  to={`/burger`}className={({isActive})=>isActive ? style.activeLink :style.link}>Burgers</NavLink>
                <NavLink  to={'/bowley'}className={({isActive})=>isActive ? style.activeLink :style.link}>Bowley</NavLink>
                <NavLink  to={'/soup'}className={({isActive})=>isActive ? style.activeLink :style.link}>Soup</NavLink>
                <NavLink  to={'/wok'}className={({isActive})=>isActive ? style.activeLink :style.link}>Wok</NavLink>
                <NavLink  to={'/salad'}className={({isActive})=>isActive ? style.activeLink :style.link}>Salad</NavLink>
            </div>
  )
}
export default Navbar

