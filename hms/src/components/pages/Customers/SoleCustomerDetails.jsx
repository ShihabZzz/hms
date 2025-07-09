import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

function SoleCustomerDetails() {
    const data = useLoaderData();
    const { id, name, email, mobile, address } = data;

    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar />
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Customer Details</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Mobile</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody>
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{mobile}</td>
                                <td>{address}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SoleCustomerDetails;
