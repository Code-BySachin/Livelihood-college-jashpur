import logo from '../assets/logo.png';
import livelihood_logo from '../assets/jashpur-livelihood-logo.png';

function Header() {
    return (
        <header className="bg-blue-800 py-4 flex flex-row justify-center items-center space-x-4 overflow-hidden">
            <span className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </span>
            <h1 className="text-white text-base sm:text-lg md:text-3xl font-bold text-center whitespace-normal">
                GOVERNMENT LIVELIHOOD COLLEGE JASHPUR
            </h1>
            <span className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                <img src={livelihood_logo} alt="Livelihood Logo" className="w-full h-full object-cover" />
            </span>
        </header>
    );
}

export default Header;