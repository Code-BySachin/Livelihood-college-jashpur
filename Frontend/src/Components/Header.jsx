import logo from '../assets/logo.png'
import livelihood_logo from '../assets/jashpur-livelihood-logo.png'
import emailIcon from '../assets/Icons/email.png'
import locationIcon from '../assets/Icons/placeholder.png'
function Header() {
    return (
        <header className="bg-blue-800 py-2 flex justify-center items-center">
            <span className='w-25 h-25'><img src={logo} alt="Logo" /></span>
            <h1 className="px-5 text-white text-3xl ">GOVERNMENT LIVLIHOOD COLLEGE JASHPUR</h1>
            <span className='w-25 h-25 rounded-full overflow-hidden'><img src={livelihood_logo} alt="Logo"/></span>
            {/* <p className="px-5">logo</p> */}
        </header>


    )
}
export default Header;