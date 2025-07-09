import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import CustomersList from "./CustomersList";

function Customers() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <Link to="/add-customer" className="btn btn-primary">
                    Add+
                </Link>
                <span className="mx-3"></span>
                <Link to="/manage-customers" className="btn btn-secondary">
                    Manage
                </Link>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Customers Details</p>
                </div>
                <CustomersList></CustomersList>
            </div>
        </div>
    )
}

export default Customers;