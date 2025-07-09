import { useLoaderData, useNavigate } from "react-router-dom";

function AddBookingForm() {
    const navigate = useNavigate();
    const CustomersData = useLoaderData();

    function addBooking(event) {
        event.preventDefault();
        const id = event.target.id.value;

        const customer = CustomersData.find((customer) => customer.id === id);
        if (!customer) {
            // If the customer is not found, display a message
            navigate('/alert');
        } else {
            const name = event.target.form_name.value;
            const email = event.target.form_email.value;
            const rt = event.target.form_rt.value;
            const rq = event.target.form_rq.value;
            const tc = event.target.form_tc.value;
            const bd = event.target.form_bd.value;
            // converting data into object
            const addBookingObj = {
                cus_id: id,
                name: name,
                email: email,
                room_type: rt,
                q_room: rq,
                cost: tc,
                booking_date: bd,
            };
            //console.log(addBookingObj);

            // api-server-calling
            fetch(`http://localhost:5008/api/Booking`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(addBookingObj),
            })
                /*response-status-data*/
                .then((res) => {
                    if (res.status === 201) {
                        // Successfully created (status code 201)
                        navigate('/booking-details');
                    } else {
                        // Handle other status codes or errors
                        throw new Error(`Failed to add booking. Status code: ${res.status}`);
                    }
                });

            /*response-body-data*/
            // .then((res) => res.json())
            // .then((data) => {
            //     if (data.acknowledged) {
            //         navigate('/booking-details');
            //     }
            // });

        }
    }
    return (
        <div>
            <form onSubmit={addBooking} className="flex flex-col gap-y-3">
                <div className="label">
                    <span className="label-text font-bold">Unique ID</span>
                </div>
                <input
                    type="text"
                    placeholder="c38b0587-dfff-4ff3-8462-08dbfc73b470"
                    name="id"
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Name</span>
                </div>
                <input
                    type="text"
                    placeholder="Dean"
                    name="form_name"
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Email Address</span>
                </div>
                <input
                    type="email"
                    placeholder="dean@email.com"
                    name="form_email"
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Room Type</span>
                </div>
                <input
                    type="text"
                    placeholder="A/B/C"
                    name="form_rt"
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Room Quantity</span>
                </div>
                <input
                    type="number"
                    placeholder="Room Quantity"
                    name="form_rq"
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Total Cost</span>
                </div>
                <input
                    type="number"
                    placeholder="100"
                    name="form_tc"
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Booking Date</span>
                </div>
                <input
                    type="date"
                    placeholder="100"
                    name="form_bd"
                    className="input input-bordered w-full max-w-xs" />

                <div>
                    <input type="submit" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}

export default AddBookingForm;