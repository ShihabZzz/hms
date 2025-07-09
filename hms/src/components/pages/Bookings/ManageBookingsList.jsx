import { Link, useLoaderData, useNavigate } from "react-router-dom";

function ManageBookingsList() {
    const BookingsData = useLoaderData();
    const navigate = useNavigate();

    function DeleteBooking(singleID) {
        fetch(`http://localhost:5008/api/Booking/${singleID}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.status === 200) {
                    // Successfull status
                    navigate('/manage-bookings');
                } else {
                    // Handle other status codes or errors
                    throw new Error(`Failed to delete booking. Status code: ${res.status}`);
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
                        <th>Booking Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {/* body */}
                <tbody>
                    {BookingsData?.map((singleData) => (
                        <tr key={singleData.id}>
                            <td>{singleData.name}</td>
                            <td>{singleData.email}</td>
                            <td>{singleData.booking_date}</td>
                            <td>
                                <Link to={`/update-booking/${singleData?.id}`}>
                                    <button className="btn btn-success">
                                        Update
                                    </button>
                                </Link>
                                <span className="mx-3"></span>
                                <button className="btn btn-warning" onClick={() => DeleteBooking(singleData.id)}>
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

export default ManageBookingsList;