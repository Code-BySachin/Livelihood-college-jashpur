import logo from '../assets/logo.png'
import { NavLink, Link } from 'react-router-dom';
function Navbar() {
    return (

        <nav className="flex  border-b-1">
            <span className='w-25 h-25'><img src={logo} alt="Logo" /></span>
            <ul className="flex justify-around w-300 py-8 hover:border-b-1">
                <NavLink to={'/'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700':' hover:border-b-1 hover:text-blue-700'}>Home</NavLink>
                <NavLink to={'/admission'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700':' hover:border-b-1 hover:text-blue-700'}>Admissions</NavLink>
                <NavLink to={'/faculties'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700':' hover:border-b-1 hover:text-blue-700'}>Faculties</NavLink>
                <NavLink to={'/course'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700':' hover:border-b-1 hover:text-blue-700'}>Departments</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700':' hover:border-b-1 hover:text-blue-700'}>About</NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700':' hover:border-b-1 hover:text-blue-700'}>Contact</NavLink>
            </ul>
        </nav>
    )
}
export default Navbar;