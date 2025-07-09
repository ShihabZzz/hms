import Navbar from "../../shared/Navbar/Navbar";
import ManageStaffsList from "./ManageStaffsList";

function ManageStaffs() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Manage Staffs</p>
                </div>
                <ManageStaffsList></ManageStaffsList>
            </div>
        </div>
    )
}

export default ManageStaffs;