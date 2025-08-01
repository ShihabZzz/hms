import { Link } from "react-router-dom";

function Navbar() {
    const navLinks = (
        <>
            <li>
                <Link to="/booking-details">Booking Details</Link>
            </li>
            <li>
                <Link to="/add-booking">Add Booking</Link>
            </li>
            <li>
                <Link to="/manage-bookings">Manage Booking</Link>
            </li>
            <li>
                <Link to="/customer-details">Customers</Link>
            </li>
        </>
    );
    return (
        // nav-bar template
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">HMS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/contact" className="btn btn-primary">
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Navbar;