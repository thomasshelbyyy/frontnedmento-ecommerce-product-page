import { useEffect } from "react"
import Carousel from "./Carousel"

const Lightbox = ({ currentActiveImage, images, setCurrentActiveImage, isLightboxActive, setIsLightboxActive }) => {

    const handleKeyup = (event) => {
        if (event.key === "Escape") {
            setIsLightboxActive(false)
        }
    }
    useEffect(() => {
        window.addEventListener("keyup", handleKeyup)

        return () => {
            window.removeEventListener("keyup", handleKeyup)
        }
    }, [])
    return (
        <div className={`absolute w-full h-screen bg-custom-lightbox-black/70 top-0 left-0 hidden md:flex flex-col justify-center items-center transition duration-300 ${isLightboxActive ? "scale-100" : "scale-0"}`}>
            <div className="w-4/12 relative">
                <button className="absolute right-0 -top-8 group" onClick={() => setIsLightboxActive(false)}>
                    <svg width="14" height="15" className="fill-current text-white group-hover:text-custom-orange" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" /></svg>
                </button>

                <img src={images[currentActiveImage - 1].full} alt="" className="w-full rounded-md" />

                <button className="absolute -left-4 top-1/2 px-4 py-3 bg-white rounded-full group" onClick={() => currentActiveImage === 1 ? setCurrentActiveImage(4) : setCurrentActiveImage(currentActiveImage - 1)}>
                    <svg width="12" height="18" className="stroke-current text-[#1D2026] group-hover:text-custom-orange" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                </button>
                <button className="absolute -right-4 top-1/2 px-4 py-3 rounded-full bg-white group" onClick={() => currentActiveImage === 4 ? setCurrentActiveImage(1) : setCurrentActiveImage(currentActiveImage + 1)}>
                    <svg width="13" height="18" className="stroke-current text-[#1D2026] group-hover:text-custom-orange" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                </button>
            </div>
            <div className="w-4/12 flex justify-between pt-4">
                <Carousel currentActiveImage={currentActiveImage} images={images} setCurrentActiveImage={setCurrentActiveImage} />
            </div>
        </div>
    )
}

export default Lightbox