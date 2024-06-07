import { useEffect, useRef } from "react";
import closeIcon from "../assets/icon-close.svg";

const Sidebar = ({ isSidebarActive, setIsSidebarActive, links, menuButtonRef }) => {
    const sidebarRef = useRef(null);

    const handleEscapeClicked = (event) => {
        if (event.key === "Escape") {
            setIsSidebarActive(false);
        }
    };

    const handleClickOutside = (event) => {
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target) &&
            menuButtonRef.current &&
            !menuButtonRef.current.contains(event.target)
        ) {
            setIsSidebarActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener("keyup", handleEscapeClicked);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("keyup", handleEscapeClicked);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`fixed inset-0 z-50 transition duration-200 bg-[rgba(0,0,0,0.7)] ${isSidebarActive ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="w-[70%] h-full bg-white p-7 flex flex-col gap-5 shadow-lg" ref={sidebarRef}>
                <button onClick={() => setIsSidebarActive(false)}>
                    <img src={closeIcon} alt="Close" />
                </button>
                {links.map((link, index) => (
                    <a href="#" className="font-semibold text-lg" key={index}>{link}</a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
