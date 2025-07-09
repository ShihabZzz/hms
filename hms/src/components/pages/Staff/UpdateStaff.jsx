import Navbar from "../../shared/Navbar/Navbar";
import UpdateStaffForm from "./UpdateStaffForm";

function UpdateStaff() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Update Staff Details</p>
                </div>
                <UpdateStaffForm></UpdateStaffForm>
            </div>
        </div>
    )
}

export default UpdateStaff;