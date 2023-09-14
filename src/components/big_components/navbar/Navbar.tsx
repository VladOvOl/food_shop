import {FC,useState} from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.scss'


export const Navbar:FC = () => {


  return (
            <div className={style.container}>
                <NavLink  to={'/'}className={style.link}>Home</NavLink>
                <NavLink  to={'/combo'}className={style.link}>Combo</NavLink>
                <NavLink  to={'/pizza'}className={style.link}>Pizza</NavLink>
                <NavLink  to={'/sushi'}className={style.link}>Sushi</NavLink>
                <NavLink  to={`/burger`}className={style.link}>Burgers</NavLink>
                <NavLink  to={'/bowley'}className={style.link}>Bowley</NavLink>
                <NavLink  to={'/soup'}className={style.link}>Soup</NavLink>
                <NavLink  to={'/wok'}className={style.link}>Wok</NavLink>
                <NavLink  to={'/salad'}className={style.link}>Salad</NavLink>
            </div>
  )
}
export default Navbar

