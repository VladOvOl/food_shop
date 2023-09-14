import {FC} from 'react'
import style from './Canvas1.module.scss'

const Canvas1:FC = () => {
  return (
    <div className={style.containerCanvas}>
        <img className={style.img} src={'https://ld-wp73.template-help.com/woocommerce/prod_24562/v4/wp-content/uploads/2019/06/Untitled-1.png'} alt="" />
        <div className={style.containerText}>
            <h1>BEST PRISE ALWAYS</h1>
            <p>The perfect place to enjoy the life & delicious food with your
                friends! Our family has been in the restaurant business for a very
                long time. Nowadays we can proudly boast our reputation for a
                well known restaurant in our area. We are famous for the fabulous
                authentic cuisine, professional chef and dedicated staff….
            </p>

            <div className={style.containerIcon}>

                <div className={style.icon}>
                    <div className={style.containerImg}>
                        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24562/v4/wp-content/uploads/2019/06/fav1.svg" alt="" />
                    </div>
                    <p>GOOD FOOD</p>
                </div>

                <div className={style.icon}>
                    <div className={style.containerImg}>
                        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24562/v4/wp-content/uploads/2019/06/fav2.svg" alt="" />
                    </div>
                    <p>FAST DELIVERY</p>
                </div>

                <div className={style.icon}>
                    <div className={style.containerImg}>
                        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24562/v4/wp-content/uploads/2019/06/fav3.svg" alt="" />
                    </div> 
                    <p>NICE PRISE</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Canvas1