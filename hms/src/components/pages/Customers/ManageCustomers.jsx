import Navbar from "../../shared/Navbar/Navbar";
import ManageCustomersList from "./ManageCustomersList";

function ManageCustomers() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Manage Customers</p>
                </div>
                <ManageCustomersList></ManageCustomersList>
            </div>
        </div>
    )
}

export default ManageCustomers;