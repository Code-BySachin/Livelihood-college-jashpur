import { NavLink, Link } from 'react-router-dom';
function Navbar() {
    return (

        <nav className="flex  border-b-1">
            <ul className="flex justify-around w-300 py-8 hover:border-b-1">
                <NavLink to={'/'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700' : ' hover:border-b-1 hover:text-blue-700'}>Home</NavLink>
                <NavLink to={'/admission'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700' : ' hover:border-b-1 hover:text-blue-700'}>Admissions</NavLink>
                <NavLink to={'/faculties'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700' : ' hover:border-b-1 hover:text-blue-700'}>Faculties</NavLink>
                {/* <NavLink to={'/course'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700':' hover:border-b-1 hover:text-blue-700'}>Schemes</NavLink> */}

                {/* 🧭 Schemes Dropdown */}
                <div className="relative group">
                    {/* <span className="cursor-pointer hover:text-blue-700">Schemes</span> */}
                    <NavLink to={'/schemes'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700' : 'px-4 py-2 hover:bg-gray-100 whitespace-nowrap'}>Schemes</NavLink>
                

                    {/* Level 1 Dropdown - Sectors */}
                    <ul className="absolute left-0 mt-2 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-10">
                        {/* Sector: Healthcare */}
                        <li className="relative group/sector1 hover:bg-gray-100 px-4 py-2 whitespace-nowrap">
                            Hospitality & Tourism
                            {/* Level 2 Dropdown - Courses under Healthcare */}
                            <ul className="absolute left-full top-0 mt-0 bg-white border rounded shadow-md opacity-0 group-hover/sector1:opacity-100 invisible group-hover/sector1:visible transition duration-200 z-20">
                                <NavLink to={'/schemes/course'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700' : 'px-4 py-2 hover:bg-gray-100 whitespace-nowrap'}>Cooking / Chef Training</NavLink>
                            </ul>
                        </li>

                        {/* Sector: IT */}
                        <li className="relative group/sector2 hover:bg-gray-100 px-4 py-2 whitespace-nowrap">
                            Security & Investigation Services
                            <ul className="absolute left-full top-0 bg-white border rounded shadow-md opacity-0 group-hover/sector2:opacity-100 invisible group-hover/sector2:visible transition duration-200 z-20">
                            <NavLink to={'/schemes/course'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700' : 'px-4 py-2 hover:bg-gray-100 whitespace-nowrap'}>Security Guarding</NavLink>
                                
                            </ul>
                        </li>

                        {/* Sector: Mechanical */}
                        <li className="relative group/sector3 hover:bg-gray-100 px-4 py-2 whitespace-nowrap">
                        Apparel, Made-Ups & Home Furnishing
                            <ul className="absolute left-full top-0 bg-white border rounded shadow-md opacity-0 group-hover/sector3:opacity-100 invisible group-hover/sector3:visible transition duration-200 z-20">
                            <NavLink to={'/schemes/course'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700' : 'px-4 py-2 hover:bg-gray-100 whitespace-nowrap'}>Stitching / Tailoring</NavLink> 
                            </ul>
                        </li>
                    </ul>
                </div>
                <NavLink to={'/faqs'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700' : ' hover:border-b-1 hover:text-blue-700'}>FAQ</NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => isActive ? ' border-b-1 text-blue-700' : ' hover:border-b-1 hover:text-blue-700'}>Contact</NavLink>
            </ul>
        </nav>
    )
}
export default Navbar;