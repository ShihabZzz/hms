import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import StaffsList from "./StaffsList";


function Staffs() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <Link to="/add-staff" className="btn btn-primary">
                    Add+
                </Link>
                <span className="mx-3"></span>
                <Link to="/manage-staffs" className="btn btn-secondary">
                    Manage
                </Link>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Staffs Details</p>
                </div>
                <StaffsList></StaffsList>
            </div>
        </div>
    )
}

export default Staffs;