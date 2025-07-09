import { Link, useLoaderData, useNavigate } from "react-router-dom";

function ManageCustomersList() {
    const CustomersData = useLoaderData();
    const navigate = useNavigate();

    function DeleteCustomer(singleID) {
        fetch(`http://localhost:5008/api/Customer/${singleID}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.status === 200) {
                    // Successfull status
                    navigate('/manage-customers');
                } else {
                    // Handle other status codes or errors
                    throw new Error(`Failed to delete customer. Status code: ${res.status}`);
                }
            });
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {/* body */}
                <tbody>
                    {CustomersData?.map((singleData) => (
                        <tr key={singleData.id}>
                            <td>{singleData.name}</td>
                            <td>{singleData.email}</td>
                            <td>
                                <Link to={`/update-customer/${singleData?.id}`}>
                                    <button className="btn btn-success">
                                        Update
                                    </button>
                                </Link>
                                <span className="mx-3"></span>
                                <button className="btn btn-warning" onClick={() => DeleteCustomer(singleData.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ManageCustomersList;