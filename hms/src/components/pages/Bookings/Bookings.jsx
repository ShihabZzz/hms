import Navbar from "../../shared/Navbar/Navbar";
import BookingsList from "./BookingsList";

function Bookings() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Booking Details</p>
                </div>
                <BookingsList></BookingsList>
            </div>
        </div>
    )
}

export default Bookings;