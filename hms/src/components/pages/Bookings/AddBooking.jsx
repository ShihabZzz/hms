import Navbar from "../../shared/Navbar/Navbar";
import AddBookingForm from "./AddBookingForm";

function AddBooking() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <div className="text-center my-10">
                    <p className="font-bold text-red-600">Add Booking</p>
                </div>
                <AddBookingForm></AddBookingForm>
            </div>
        </div>
    )
}

export default AddBooking;