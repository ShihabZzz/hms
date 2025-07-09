import Navbar from "../../shared/Navbar/Navbar";
import ManageBookingsList from "./ManageBookingsList";

function ManageBookings() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Manage Bookings</p>
                </div>
                <ManageBookingsList></ManageBookingsList>
            </div>
        </div>
    )
}

export default ManageBookings;