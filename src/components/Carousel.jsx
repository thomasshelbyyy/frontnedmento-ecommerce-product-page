const Carousel = ({ images, setCurrentActiveImage, currentActiveImage }) => {
    return (
        <>
            {images.map((image, index) => (
                <button key={index} className={`relative w-1/5 border-2 rounded-md ${currentActiveImage === index + 1 ? "border-custom-orange" : "border-transparent"}`} onClick={() => setCurrentActiveImage(index + 1)}>
                    <img src={image.thumb} alt="" className="w-full h-full object-cover rounded-md" />
                    {currentActiveImage === index + 1 && (
                        <div className="absolute inset-0 bg-white bg-opacity-60 rounded-md"></div>
                    )}
                </button>
            ))}
        </>
    )
}

export default Carousel