import { useState } from "react"
import iconMinus from "../assets/icon-minus.svg"
import iconPlus from "../assets/icon-plus.svg"
import Carousel from "./Carousel"
import Swal from "sweetalert2"
import iconNext from "../assets/icon-next.svg"
import iconPrevious from "../assets/icon-previous.svg"

const product = {
    id: "1",
    name: "Fall Limited Edition Sneakers",
    imageUrl: "../assets/image-products-1.jpg",
    price: 250,
    discount: 50
}

const MainContent = ({ images, currentActiveImage, setCurrentActiveImage, setIsLightboxActive, carts, setCarts }) => {

    const [quantity, setQuantity] = useState(1)

    const handleAddToCart = () => {
        if (carts.length > 0) {
            Swal.fire({
                icon: "error",
                title: "Oops....",
                text: "This product is already in your cart!"
            })
        } else {
            const productData = { ...product, quantity: quantity }
            const updatedCarts = [...carts, productData]
            setCarts(updatedCarts)
            Swal.fire({
                icon: "success",
                title: "Added to cart!"
            })
        }
    }


    return (
        <div className="w-full md:px-32 flex flex-col md:flex-row justify-center md:gap-20 md:pt-20">
            <div className="full md:w-4/12">
                <div className="w-full md:px-3 pb-4 relative">
                    <button className="absolute md:hidden left-4 top-1/2 px-3 py-2 bg-white rounded-full" onClick={() => currentActiveImage === 1 ? setCurrentActiveImage(4) : setCurrentActiveImage(currentActiveImage - 1)}>
                        <img src={iconPrevious} alt="" className="w-3" />
                    </button>
                    <img src={images[currentActiveImage - 1].full} alt="" className="w-full md:rounded-md cursor-pointer" onClick={() => setIsLightboxActive(true)} />
                    <button className="absolute md:hidden right-4 top-1/2 px-3 py-[10px] bg-white rounded-full" onClick={() => currentActiveImage === 1 ? setCurrentActiveImage(4) : setCurrentActiveImage(currentActiveImage - 1)}>
                        <img src={iconNext} alt="" className="w-3" />
                    </button>
                </div>
                <div className="w-full hidden md:flex justify-between">
                    <Carousel images={images} setCurrentActiveImage={setCurrentActiveImage} currentActiveImage={currentActiveImage} />
                </div>
            </div>
            <div className="w-full md:w-4/12 flex flex-col justify-center px-4 py-3 md:p-0 text-custom-very-dark-blue">
                <p className="tracking-wider text-sm">SNEAKER COMPANY</p>
                <p className="text-3xl font-bold pt-3">{product.name}</p>
                <p className="py-4">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll witstand everything the weather can offer</p>

                <div className="flex md:flex-col justify-between w-full">
                    <div className="flex items-center">
                        <span className="font-bold text-xl pr-3">${product.price * product.discount / 100}</span>
                        <span className="px-2 py-1 bg-custom-very-dark-blue text-custom-light-grayish-blue rounded-sm text-sm">{product.discount}%</span>
                    </div>
                    <p className="py-3 line-through">${product.price}</p>
                </div>

                <div className="flex flex-col  md:flex-row w-full">
                    <div className="flex justify-center items-center w-full md:w-2/5 py-4 md:py-0">
                        <button disabled={quantity === 1} className="border px-3 py-4 rounded-l-md" onClick={() => setQuantity(quantity - 1)}>
                            <img src={iconMinus} alt="" className="w-4" />
                        </button>
                        <span className="px-6 py-2 border-t border-b w-[85%] md:w-auto text-center">

                            {quantity}
                        </span>
                        <button className="border px-3 py-3 rounded-r-md" onClick={() => setQuantity(quantity + 1)}>
                            <img src={iconPlus} alt="" className="w-4" />
                        </button>
                    </div>
                    <button className="font-semibold w-full md:w-3/5 py-3 bg-custom-orange hover:bg-orange-300 rounded-md flex justify-center items-center" onClick={handleAddToCart}>
                        <svg width="30" height="20" xmlns="http://www.w3.org/2000/svg" className="pr-2"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#000" fillRule="nonzero" /></svg>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainContent