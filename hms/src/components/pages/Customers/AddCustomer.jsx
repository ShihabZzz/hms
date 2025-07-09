import Navbar from "../../shared/Navbar/Navbar";
import AddCustomerForm from "./AddCustomerForm";

function AddCustomer() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Add Customer</p>
                </div>
                <AddCustomerForm></AddCustomerForm>
            </div>
        </div>
    )
}

export default AddCustomer;