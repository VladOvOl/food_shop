import {FC} from 'react'
import style from './Canvas2.module.scss'

const Canvas2:FC = () => {
  return (
    <div className={style.container}>
        <div className={style.containerFood}>
            <div className={style.containerText}>
                <h1>BEEF CLASSIC</h1>
                <h1>BURGERS</h1>
                <p>Try this delicious burger containing of two fried parts of a whole-grain bun, a juicy piece of beef, cheese and lettuce</p>
            </div>

            <div className={style.containerImg}>
                <img src="https://ikura.ua/Media/images/catalog/big/9818e4c13c979f078a15c667622fa16e.jpg" alt="" />
            </div>
        </div>
        <div className={style.containerFood}>

            <div className={style.containerImg}>
                <img src="https://ikura.ua/Media/images/catalog/big/0c45dd409dfc4475a51f8b441e753ab3.jpg" alt="" />
            </div>

            <div className={style.containerText}>
                <h1>SEASON SOUP</h1>
                <p>We offer you a special dish – our season soup containing season vegetables</p>
            </div>

           
        </div>
        <div className={style.containerFood}>
            <div className={style.containerText}>
                <h1>THE BEST PIZZA</h1>
                <p>Our pizza with seafood is mixed perfectly with a glass of white wine</p>
            </div>

            <div className={style.containerImg}>
                <img src="https://ikura.ua/Media/images/catalog/big/9ccc4b46fbf54770592056d21f060b21.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Canvas2