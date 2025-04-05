import logo from '../assets/logo.png'
import { NavLink,Link } from 'react-router';
function Navbar() {
    return (

        <nav className="flex  border-b-1">
            <span className='w-25 h-25'><img src={logo} alt="Logo" /></span>
            <ul className="flex justify-around w-300 py-8 hover:border-b-1">
                <Link to={'/'} className=' hover:border-b-1 hover:text-blue-700'>Home</Link>        
                <Link to={'/admission'} className=' hover:border-b-1 hover:text-blue-700'>Admissions</Link>
                <Link to={'/faculties'} className=' hover:border-b-1 hover:text-blue-700'>Faculties</Link>
                <Link to={'/course'} className=' hover:border-b-1 hover:text-blue-700'>Departments</Link>
                <Link to={'/about'} className=' hover:border-b-1 hover:text-blue-700'>About</Link>
                <Link to={'/contact'} className=' hover:border-b-1 hover:text-blue-700'>Contact</Link>
            </ul>
        </nav>
    )
}
export default Navbar;