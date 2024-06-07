import productImage from "../assets/image-product-1-thumbnail.jpg"
import deleteIcon from "../assets/icon-delete.svg"

const Carts = ({ carts, handleRemoveCarts }) => {
    return (
        <div className="absolute w-72 h-48 rounded-md bg-custom-pale-orange -bottom-52 -left-28 shadow-lg hidden md:block">
            <p className="pl-3 pt-3 pb-5 font-semibold">Cart</p>
            <div className="w-full h-[1px] bg-custom-light-grayish-blue"></div>
            {carts.length > 0 ? (
                <div className="px-5 py-3 w-full">
                    <div className="w-full flex justify-between items-center pb-3">
                        <img src={productImage} alt="" className="w-8 h-8 rounded-md" />
                        <div className="text-sm text-custom-dark-grayish-blue">
                            <p>{carts[0].name}</p>
                            <p>${carts[0].price * carts[0].discount / 100} X {carts[0].quantity} <span className="font-semibold text-black"> ${(carts[0].price * carts[0].discount / 100) * carts[0].quantity}</span></p>
                        </div>
                        <button onClick={handleRemoveCarts}>
                            <img src={deleteIcon} alt="" className="w-5 h-5 " />
                        </button>
                    </div>
                    <button className="w-full py-2 bg-custom-orange rounded-md font-semibold">Checkout</button>

                </div>
            ) : (
                <div className="flex justify-center items-center w-full h-1/2 font-medium">
                    Your cart is empty
                </div>
            )}

        </div>
    )
}

export default Carts