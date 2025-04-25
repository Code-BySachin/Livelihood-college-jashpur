import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="border-b-1 sticky top-0 z-50 bg-white shadow-md">
            {/* Navbar Container */}
            <div className="flex justify-between justify-center px-4 py-4 sm:py-6 md:py-8">
                {/* Hamburger Menu for Mobile */}
                <button
                    className="sm:hidden text-blue-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✖' : '☰'}
                </button>

                {/* Navigation Links */}
                <ul
                    className={`${isMenuOpen ? 'flex flex-col items-center space-y-4' : 'hidden'
                        } sm:flex sm:flex-row sm:justify-center sm:space-x-6 w-full sm:w-auto`}
                >
                    <NavLink
                        to={'/'}
                        className={({ isActive }) =>
                            isActive
                                ? 'border-b-1 text-blue-700'
                                : 'hover:border-b-1 hover:text-blue-700'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={'/admission'}
                        className={({ isActive }) =>
                            isActive
                                ? 'border-b-1 text-blue-700'
                                : 'hover:border-b-1 hover:text-blue-700'
                        }
                    >
                        Admissions
                    </NavLink>
                    <NavLink
                        to={'/faculties'}
                        className={({ isActive }) =>
                            isActive
                                ? 'border-b-1 text-blue-700'
                                : 'hover:border-b-1 hover:text-blue-700'
                        }
                    >
                        Faculties
                    </NavLink>

                    {/* Schemes Dropdown */}
                    <div className="relative group">
                        <NavLink
                            to={'/schemes'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-b-1 text-blue-700'
                                    : 'px-4 py-2 hover:bg-gray-100 whitespace-nowrap'
                            }
                        >
                            Schemes
                        </NavLink>
                        <ul className="absolute left-0 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-10">
                            <li className="relative group/sector1 hover:bg-gray-100 px-4 py-2 whitespace-nowrap">
                                Hospitality & Tourism
                                <ul className="absolute left-full top-0 mt-0 bg-white border rounded shadow-md opacity-0 group-hover/sector1:opacity-100 invisible group-hover/sector1:visible transition duration-200 z-20">
                                    <NavLink
                                        to={'/schemes/course'}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'border-b-1 text-blue-700'
                                                : 'px-4 py-2 hover:bg-gray-100 whitespace-nowrap'
                                        }
                                    >
                                        Cooking / Chef Training
                                    </NavLink>
                                </ul>
                            </li>
                            <li className="relative group/sector2 hover:bg-gray-100 px-4 py-2 whitespace-nowrap">
                                Security & Investigation Services
                                <ul className="absolute left-full top-0 bg-white border rounded shadow-md opacity-0 group-hover/sector2:opacity-100 invisible group-hover/sector2:visible transition duration-200 z-20">
                                    <NavLink
                                        to={'/schemes/course'}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'border-b-1 text-blue-700'
                                                : 'px-4 py-2 hover:bg-gray-100 whitespace-nowrap'
                                        }
                                    >
                                        Security Guarding
                                    </NavLink>
                                </ul>
                            </li>
                            <li className="relative group/sector3 hover:bg-gray-100 px-4 py-2 whitespace-nowrap">
                                Apparel, Made-Ups & Home Furnishing
                                <ul className="absolute left-full top-0 bg-white border rounded shadow-md opacity-0 group-hover/sector3:opacity-100 invisible group-hover/sector3:visible transition duration-200 z-20">
                                    <NavLink
                                        to={'/schemes/course'}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'border-b-1 text-blue-700'
                                                : 'px-4 py-2 hover:bg-gray-100 whitespace-nowrap'
                                        }
                                    >
                                        Stitching / Tailoring
                                    </NavLink>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <NavLink
                        to={'/faqs'}
                        className={({ isActive }) =>
                            isActive
                                ? 'border-b-1 text-blue-700'
                                : 'hover:border-b-1 hover:text-blue-700'
                        }
                    >
                        FAQ
                    </NavLink>
                    <NavLink
                        to={'/contact'}
                        className={({ isActive }) =>
                            isActive
                                ? 'border-b-1 text-blue-700'
                                : 'hover:border-b-1 hover:text-blue-700'
                        }
                    >
                        Contact
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;