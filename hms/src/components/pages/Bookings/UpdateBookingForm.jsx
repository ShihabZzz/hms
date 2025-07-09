import { useLoaderData, useNavigate } from "react-router-dom";

function UpdateBookingForm() {
    const singleData = useLoaderData();
    const navigate = useNavigate();

    function updateBooking(event) {
        event.preventDefault();
        const name = event.target.form_name.value;
        const email = event.target.form_email.value;
        const rt = event.target.form_rt.value;
        const rq = event.target.form_rq.value;
        const tc = event.target.form_tc.value;
        const bd = event.target.form_bd.value;
        // converting data into object
        const updateBookingObj = {
            name: name,
            email: email,
            room_type: rt,
            q_room: rq,
            cost: tc,
            booking_date: bd,
        };
        //console.log(addBookingObj);

        // PUT request to the server
        fetch(`http://localhost:5008/api/Booking/${singleData?.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateBookingObj)
        })
            /*response-status-data*/
            .then((res) => {
                if (res.status === 200) {
                    // Successfull status
                    navigate('/booking-details');
                } else {
                    // Handle other status codes or errors
                    throw new Error(`Failed to update booking. Status code: ${res.status}`);
                }
            });

    }
    return (
        <div>
            <form onSubmit={updateBooking} className="flex flex-col gap-y-5">
                <div className="label">
                    <span className="label-text font-bold">Name</span>
                </div>
                <input
                    type="text"
                    placeholder="Dean"
                    name="form_name"
                    defaultValue={singleData?.name}
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Email Address</span>
                </div>
                <input
                    type="email"
                    placeholder="dean@email.com"
                    name="form_email"
                    defaultValue={singleData?.email}
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Room Type</span>
                </div>
                <input
                    type="text"
                    placeholder="A/B/C"
                    name="form_rt"
                    defaultValue={singleData?.room_type}
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Room Quantity</span>
                </div>
                <input
                    type="number"
                    placeholder="Room Quantity"
                    name="form_rq"
                    defaultValue={singleData?.q_room}
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Total Cost</span>
                </div>
                <input
                    type="number"
                    placeholder="100"
                    name="form_tc"
                    defaultValue={singleData?.cost}
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Booking Date</span>
                </div>
                <input
                    type="date"
                    placeholder="100"
                    name="form_bd"
                    defaultValue={singleData?.booking_date}
                    className="input input-bordered w-full max-w-xs" />

                <div>
                    <input type="submit" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}

export default UpdateBookingForm;