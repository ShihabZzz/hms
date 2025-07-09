import Navbar from "../../shared/Navbar/Navbar";
import UpdateCustomerForm from "./UpdateCustomerForm";

function UpdateCustomer() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Update Customer Details</p>
                </div>
                <UpdateCustomerForm></UpdateCustomerForm>
            </div>
        </div>
    )
}

export default UpdateCustomer;