import {FC} from 'react'
import style from './HomePge.module.scss'
import Canvas1 from './components/canvas1/Canvas1'
import Canvas2 from './components/canvas2/Canvas2'


const HomePage:FC = () => {
  return (
    <>  
        <Canvas1/>
        <Canvas2/>
        
    </>
  )
}

export default HomePage