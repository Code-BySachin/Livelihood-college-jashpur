import emailIcon from '../assets/Icons/email.png'
import locationIcon from '../assets/Icons/placeholder.png'
function Header() {
    return (
        <header className="bg-blue-800 py-2 flex justify-between">
            <p className="px-5 text-white"><img className='w-5' src={locationIcon} alt="*" />GOVERNMENT LIVLIHOOD COLLEGE JASHPUR</p>
            <p className="px-5">logo</p>
        </header>


    )
}
export default Header;