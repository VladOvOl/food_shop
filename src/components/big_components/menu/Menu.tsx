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

                <NavLink  to={'/'}className={style.link}>
                    <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                        <img src={require('./icons/icons/home.png')} alt="" />
                        <span>Home</span>
                    </div>
                </NavLink>  

                <NavLink  to={'/combo'}className={style.link}>
                    <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                        <img src={require('./icons/icons/combo.png')} alt="" />
                        <span>Combo</span>
                    </div>
                </NavLink>

                <NavLink  to={'/pizza'}className={style.link}>
                    <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                        <img src={require('./icons/icons/pizza.png')} alt="" />
                        <span>Pizza</span>
                    </div>
                </NavLink>

                <NavLink  to={'/sushi'}className={style.link}>
                    <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                        <img src={require('./icons/icons/sushi.png')} alt="" />
                        <span>Sushi</span>
                    </div>
                </NavLink>

                <NavLink  to={`/burger`}className={style.link}>
                    <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                        <img src={require('./icons/icons/burger.png')} alt="" />
                        <span>Burgers</span>
                    </div>
                </NavLink>
                
                <NavLink  to={'/bowley'}className={style.link}>
                    <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                        <img src={require('./icons/icons/bowley.png')} alt="" />
                        <span>Bowley</span>
                    </div>
                </NavLink>
                
                <NavLink  to={'/soup'}className={style.link}>
                    <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                        <img src={require('./icons/icons/soup.png')} alt="" />
                        <span>Soup</span>
                    </div>
                </NavLink>
                
                <NavLink  to={'/wok'}className={style.link}>
                    <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                        <img src={require('./icons/icons/ramen.png')} alt="" />
                        <span>Wok</span>
                    </div>
                </NavLink>

                <NavLink  to={'/salad'}className={style.link}>
                    <div className={style.containerLink} onClick={()=>dispatch(changeStateMenuBtn())}>
                        <img src={require('./icons/icons/salad.png')} alt="" />
                        <span>Salad</span>
                    </div>
                </NavLink>
          
            </div>
        </div>
        
  )
}

export default Menu

