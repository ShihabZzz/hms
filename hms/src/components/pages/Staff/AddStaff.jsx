import Navbar from "../../shared/Navbar/Navbar";
import AddStaffForm from "./AddStaffForm";


function AddStaff() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Add Staff</p>
                </div>
                <AddStaffForm></AddStaffForm>
            </div>
        </div>
    )
}

export default AddStaff;