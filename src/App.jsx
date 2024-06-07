import Lightbox from './components/Lightbox'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import * as thumbs from "./assets/thumbnail"
import * as fulls from "./assets/full"
import { useState } from 'react'

function App() {

  const [currentActiveImage, setCurrentActiveImage] = useState(1)
  const [isLightboxActive, setIsLightboxActive] = useState(false)
  const [carts, setCarts] = useState([])

  const images = [
    { thumb: thumbs.thumbnail1, full: fulls.full1 },
    { thumb: thumbs.thumbnail2, full: fulls.full2 },
    { thumb: thumbs.thumbnail3, full: fulls.full3 },
    { thumb: thumbs.thumbnail4, full: fulls.full4 }
  ]

  return (
    <div className='w-full relative'>
      <Navbar carts={carts} setCarts={setCarts} />
      <MainContent
        images={images}
        currentActiveImage={currentActiveImage}
        setCurrentActiveImage={setCurrentActiveImage}
        setIsLightboxActive={setIsLightboxActive}
        carts={carts}
        setCarts={setCarts}
      />
      <Lightbox
        currentActiveImage={currentActiveImage}
        images={images} setCurrentActiveImage={setCurrentActiveImage}
        isLightboxActive={isLightboxActive}
        setIsLightboxActive={setIsLightboxActive}
      />
    </div>

  )
}

export default App
