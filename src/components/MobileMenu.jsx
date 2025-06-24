

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-transform duration-300 ease-in-out 
        ${menuOpen 
        ? "h-screen opacity-100 pointer-events-auto" 
        : "h-0 opacity-0 pointer-events-none"}`}>
            <button className="absolute top-4 right-4 text-white text-2xl focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(false)}>
                &times;
            </button>
            <nav className="flex flex-col items-center space-y-6">
                <a href="#home" 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-cyan-400
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Home</a>

                <a href="#about" 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-cyan-400
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>About</a>

                <a href="#services" 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-cyan-400
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Service</a>

                <a href="#contact" 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-cyan-400
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Contact</a>
            </nav>
        </div>
    )
}