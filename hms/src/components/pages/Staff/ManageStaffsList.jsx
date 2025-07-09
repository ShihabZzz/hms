import { Link, useLoaderData, useNavigate } from "react-router-dom";

function ManageStaffsList() {
    const StaffsData = useLoaderData();
    const navigate = useNavigate();

    function DeleteStaff(singleID) {
        fetch(`http://localhost:5008/api/Staff/${singleID}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.status === 200) {
                    // Successfull status
                    navigate('/manage-staffs');
                } else {
                    // Handle other status codes or errors
                    throw new Error(`Failed to delete staff. Status code: ${res.status}`);
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
                    {StaffsData?.map((singleData) => (
                        <tr key={singleData.id}>
                            <td>{singleData.name}</td>
                            <td>{singleData.email}</td>
                            <td>
                                <Link to={`/update-staff/${singleData?.id}`}>
                                    <button className="btn btn-success">
                                        Update
                                    </button>
                                </Link>
                                <span className="mx-3"></span>
                                <button className="btn btn-warning" onClick={() => DeleteStaff(singleData.id)}>
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

export default ManageStaffsList;