import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import './header.css'


const Header = () => {

    const location = useLocation();

    const links = <>
        <li><NavLink to={'/'}
        className={({isActive}) => `${isActive ?  'active-white' : ''}`}
        >Home</NavLink></li>
        {/* React Router passes an object to this function — we destructure it to get isActive (true if link matches current route) 
        It gives you isActive (a boolean) — true if this link matches the current route*/}
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
    </> 

    return (
        <div className={`navbar bg-base-100 shadow-xs mt-4 ${location.pathname === '/' ? 'bg-purple-600 text-white rounded-t-2xl' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <Link to={'/'} className="font-semibold text-xl">Gadgetorium</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4 mr-4">
                <Link to={'/dashboard'} className="text-2xl"><IoCartOutline /></Link>
                <Link to={'/dashboard'} className=""><FaRegHeart /></Link>
            </div>
        </div>
    );
};

export default Header;