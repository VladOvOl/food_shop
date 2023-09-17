import {FC} from 'react'
import Canvas1 from './components/canvas1/Canvas1'
import Canvas2 from './components/canvas2/Canvas2'
import Canvas3 from './components/canvas3/Canvas3'
import Map from './components/map/Map'
import Footer from '../../components/big_components/footer/Footer'


const HomePage:FC = () => {
  return (
    <>  
        <Canvas1/>
        <Canvas2/>
        <Canvas3/>
        <Map/>
        <Footer/>
        
    </>
  )
}

export default HomePage