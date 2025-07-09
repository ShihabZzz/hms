import Navbar from "../../shared/Navbar/Navbar";
import UpdateBookingForm from "./UpdateBookingForm";

function UpdateBooking() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Update Booking Details</p>
                </div>
                <UpdateBookingForm></UpdateBookingForm>
            </div>
        </div>
    )
}

export default UpdateBooking;