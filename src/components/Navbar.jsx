import { useRef, useState } from "react";
import Swal from "sweetalert2";
import menuIcon from "../assets/icon-menu.svg"
import Logo from "../assets/logo.svg"
import cartLogo from "../assets/icon-cart.svg"
import Carts from "./Carts"
import MobileCarts from "./MobileCarts"
import Sidebar from "./Sidebar"
import avatar from "../assets/image-avatar.png"

const links = ["Collections", "Men", "Women", "About", "Contact"]

const Navbar = ({ carts, setCarts }) => {
    const [isCartsActive, setIsCartsActive] = useState(false);
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const menuButtonRef = useRef(null);

    const handleRemoveCart = () => {
        Swal.fire({
            icon: "question",
            title: "Are you sure want to remove from cart?",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes, Remove it"
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedCarts = carts.filter(cart => cart.id !== "1");
                setCarts(updatedCarts);
                Swal.fire({
                    icon: "success",
                    title: "Removed"
                });
            }
        });
    };

    return (
        <div className="relative w-full">
            <nav className="w-full flex justify-between px-10 py-4 md:py-0 md:px-24 items-center shadow-md relative">
                <div className="flex items-center gap-4 md:gap-8">
                    <button ref={menuButtonRef} className="" onClick={() => setIsSidebarActive(true)}>
                        <img src={menuIcon} alt="Menu" className="md:hidden" />
                    </button>
                    <img src={Logo} alt="Logo" className="w-24 h-fit" />
                    {links.map(link => (
                        <a href="#" key={link} className="py-8 relative hidden md:block before:absolute before:w-full before:h-[2px] before:bg-custom-orange before:bottom-0 before:left-0 before:scale-0 before:hover:scale-100 before:transtition before:duration-200">{link}</a>
                    ))}
                </div>

                <div className="flex gap-8 relative">
                    <button onClick={() => setIsCartsActive(!isCartsActive)} className="relative">
                        <img src={cartLogo} alt="Cart" className="w-6 h-6" />
                        {carts.length > 0 && <span className="absolute top-0 -right-2 px-2 text-white bg-custom-orange text-xs rounded-full">{carts[0].quantity}</span>}
                    </button>

                    <button className="group">
                        <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-custom-orange" />
                    </button>
                    {isCartsActive && <Carts carts={carts} handleRemoveCarts={handleRemoveCart} />}
                </div>

                {isCartsActive && (
                    <MobileCarts carts={carts} handleRemoveCarts={handleRemoveCart} />
                )}
            </nav>
            <Sidebar links={links} isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive} menuButtonRef={menuButtonRef} />
        </div>
    );
};

export default Navbar;
