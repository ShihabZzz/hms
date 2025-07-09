import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function BookingsList() {
    const BookingsData = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>Booked By</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Room Type</th>
                        <th>Room Quantity</th>
                        <th>Total Cost</th>
                        <th>Booking Date</th>
                    </tr>
                </thead>
                {/* body */}
                <tbody>
                    {BookingsData?.map((singleData) => (
                        <tr key={singleData.id}>
                            <td>
                                <Link to={`/sole-customer-details/${singleData.cus_id}`}>
                                    <button className="btn btn-success">
                                        Details
                                    </button>
                                </Link>
                            </td>
                            {/* <td>{singleData.cus_id}</td> */}
                            <td>{singleData.name}</td>
                            <td>{singleData.email}</td>
                            <td>{singleData.room_type}</td>
                            <td>{singleData.q_room}</td>
                            <td>{singleData.cost}</td>
                            <td>{singleData.booking_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BookingsList;