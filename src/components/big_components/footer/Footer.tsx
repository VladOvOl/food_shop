import {FC,useState,MouseEvent} from 'react'
import style from './Footer.module.scss'
import gif from './assets/icons/point.gif'
import clock from './assets/icons/clock.gif'
import phone from './assets/icons/phone.gif'
import mail from './assets/icons/mail.gif'

const Footer:FC = () => {

    let [data,setData] = useState({
        email:"",
        name:"",
        message:""
    })
    const clear = (e:MouseEvent) =>{
        e.preventDefault()
        setData({
            email:"",
            name:"",
            message:""            
        })
        
    }



  return (
    <footer className={style.container}>

        
        <form className={style.containerForm}>
            <h1 >SIGN UP FOR OUR UPDATE</h1>

            <div className={style.containerInput}>
                <input type="email" placeholder='Enter your email.....'
                onChange={e=>setData((prev)=>({...prev, email:e.target.value}))} value={data.email}/>
            </div>
            <div className={style.containerInput}>
                <input type="text" placeholder='Enter your name....'
                onChange={e=>setData((prev)=>({...prev, name:e.target.value}))} value={data.name}/> 
            </div>
            <div className={style.containerInput}>
                <textarea name="" id=""  rows={2} placeholder='Enter your message....'
                onChange={e=>setData((prev)=>({...prev, message:e.target.value}))} value={data.message}></textarea> 
            </div>

            <div className={style.containerBtn}>
                <button onClick={e=>clear(e)}>Clear</button>
                <button onClick={(e)=>e.preventDefault()}>Send</button>
            </div>
            
        </form>

        <div className={style.containerContact}>
            <h1>CONTACT US</h1>
            <div className={style.containerText}>
                <div className={style.containerRow}>
                    <div className={style.containerImg}>
                        <img src={gif} width={50} height={50}/>
                    </div>
                    <span>34 Fordham Street, New York, NY 10027</span>
                </div>
                
                <div className={style.containerRow}>
                    <div className={style.containerImg}>
                        <img src={phone}  width={45} height={45}/>
                    </div>
                    <a href="tel:+380989133513">+380-98-91-33-513</a>
                </div>
                
                <div className={style.containerRow}>
                    <div className={style.containerImg}>
                        <img src={clock}  width={50} height={50}/>
                    </div>
                    <span>Monday-Friday: 9:00 am - 6:00 pm Saturday: 9:00 am - 4:00 pm</span>
                </div>
                
                <div className={style.containerRow}>
                    <div className={style.containerImg}>
                        <img src={mail}  width={40} height={40}/>
                    </div>
                    <span>Send us an email</span>
                </div>
                
            </div>
            
        </div>

        <div className={style.containerSocial}>
            <h1>SOCIAL MEDIA</h1>
            <div className={style.containerText}>
                <div className={style.containerRow}>
                    <img src={require('./assets/icons/instagram.png')} alt="" />
                    <span>Instagram</span>
                </div>

                <div className={style.containerRow}>
                    <img src={require('./assets/icons/facebook.png')} alt="" />
                    <span>Facebook</span>
                </div>
                    
                <div className={style.containerRow}>
                    <img src={require('./assets/icons/telegram.png')} alt="" />
                    <span>Telegram</span>
                </div>

                <div className={style.containerRow}>
                    <img src={require('./assets/icons/twiter.png')} alt="" />
                    <span>Twiter</span>
                </div>
                
            </div>
            
        </div>
    </footer>
  )
}

export default Footer