import  {FC} from 'react'
import style from './Menu.module.scss'
import { useDispatch } from 'react-redux'
import { changeStateMenuBtn } from '../../../redux/slices/menuToolkitSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { NavLink } from 'react-router-dom'

const  Menu:FC =()=> {

    /*<div className={style.containerHeader}>
                <Link className={style.containerBtn} to={'/'}>
                    <img src={require('../../../assets/icons/menuWhite.png')} alt="" />
                </Link>

                <div className={style.containerLogo}>
                        <img src={require('../../../assets/icons/logo.png')} alt="" height={55} width={55}/>
                    <div className={style.containerTitle}>
                        <p className={style.title}>REACT PIZZA</p>
                        <p className={style.underTitle}>Найкраща піцца у нас!</p>
                    </div>
                </div>
            </div>*/


    let dispatch = useAppDispatch()
    let stateBasketContainer = useAppSelector(state => state.menuToolkit.stateMenuBtn)


  return (
    <div className={style.container}>
            <div className={style.containerLinks}>
                
                <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                    <img src={require('./icons/icons/home.png')} alt="" />
                    <NavLink  to={'/'}className={style.link}>Home</NavLink>
                </div>
                
                <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                    <img src={require('./icons/icons/combo.png')} alt="" />
                    <NavLink  to={'/combo'}className={style.link}>Combo</NavLink>
                </div>
                

                <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                <img src={require('./icons/icons/pizza.png')} alt="" />
                <NavLink  to={'/pizza'}className={style.link}>Pizza</NavLink>
                </div>
                
                <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                <img src={require('./icons/icons/sushi.png')} alt="" />
                <NavLink  to={'/sushi'}className={style.link}>Sushi</NavLink>
                </div>
                
                <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                <img src={require('./icons/icons/burger.png')} alt="" />
                <NavLink  to={`/burger`}className={style.link}>Burgers</NavLink>
                </div>
                
                <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                <img src={require('./icons/icons/bowley.png')} alt="" />
                <NavLink  to={'/bowley'}className={style.link}>Bowley</NavLink>
                </div>
                
                <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                <img src={require('./icons/icons/soup.png')} alt="" />
                <NavLink  to={'/soup'}className={style.link}>Soup</NavLink>
                </div>
                
                <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                <img src={require('./icons/icons/ramen.png')} alt="" />
                <NavLink  to={'/wok'}className={style.link}>Wok</NavLink>
                </div>

                <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                <img src={require('./icons/icons/salad.png')} alt="" />
                <NavLink  to={'/salad'}className={style.link}>Salad</NavLink>
                </div>
          
            </div>
        </div>
        
  )
}

export default Menu

