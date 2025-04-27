import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for main dropdown
    const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState({
        sector1: false,
        sector2: false,
        sector3: false,
    }); // State for nested dropdowns

    const location = useLocation(); // Get the current route

    // Check if the current route matches any of the nested dropdown routes
    const isSchemesActive =
        location.pathname.startsWith('/schemes') || location.pathname === '/schemes/course';

    const toggleNestedDropdown = (sector) => {
        setIsNestedDropdownOpen((prevState) => ({
            ...prevState,
            [sector]: !prevState[sector],
        }));
    };

    return (
        <nav className="border-b-1 sticky top-0 z-50 bg-white shadow-md">
            {/* Navbar Container */}
            <div className="flex justify-between items-center px-4 py-4 sm:py-6 md:py-8">
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
                    <div className="relative">
                        <button
                            className={`px-4 py-2 whitespace-nowrap sm:group ${
                                isSchemesActive
                                    ? 'border-b-1 text-blue-700'
                                    : 'hover:border-b-1 hover:text-blue-700'
                            }`}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle main dropdown
                        >
                            Schemes
                        </button>
                        <ul
                            className={`absolute left-0 bg-white border rounded shadow-md transition duration-200 z-10 ${
                                isDropdownOpen ? 'block' : 'hidden'
                            } sm:group-hover:block sm:opacity-100 sm:visible`}
                        >
                            {/* Nested Dropdown 1 */}
                            <li className="relative hover:bg-gray-100 px-4 py-2 whitespace-nowrap">
                                <button
                                    className="w-full text-left"
                                    onClick={() => toggleNestedDropdown('sector1')}
                                >
                                    Hospitality & Tourism
                                </button>
                                <ul
                                    className={`absolute sm:left-full sm:top-0 left-0 top-full bg-white border rounded shadow-md transition duration-200 z-20 ${
                                        isNestedDropdownOpen.sector1 ? 'block' : 'hidden'
                                    }`}
                                >
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

                            {/* Nested Dropdown 2 */}
                            <li className="relative hover:bg-gray-100 px-4 py-2 whitespace-nowrap">
                                <button
                                    className="w-full text-left"
                                    onClick={() => toggleNestedDropdown('sector2')}
                                >
                                    Security & Investigation Services
                                </button>
                                <ul
                                    className={`absolute sm:left-full sm:top-0 left-0 top-full bg-white border rounded shadow-md transition duration-200 z-20 ${
                                        isNestedDropdownOpen.sector2 ? 'block' : 'hidden'
                                    }`}
                                >
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

                            {/* Nested Dropdown 3 */}
                            <li className="relative hover:bg-gray-100 px-4 py-2 whitespace-nowrap">
                                <button
                                    className="w-full text-left"
                                    onClick={() => toggleNestedDropdown('sector3')}
                                >
                                    Apparel, Made-Ups & Home Furnishing
                                </button>
                                <ul
                                    className={`absolute sm:left-full sm:top-0 left-0 top-full bg-white border rounded shadow-md transition duration-200 z-20 ${
                                        isNestedDropdownOpen.sector3 ? 'block' : 'hidden'
                                    }`}
                                >
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