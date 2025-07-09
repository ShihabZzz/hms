import { useNavigate } from "react-router-dom";

function AddCustomerForm() {
    const navigate = useNavigate();

    function addCustomer(event) {
        event.preventDefault();

        const name = event.target.form_name.value;
        const email = event.target.form_email.value;
        const mobile = event.target.form_mobile.value;
        const address = event.target.form_address.value;
        // converting data into object
        const addCustomerObj = {
            name: name,
            email: email,
            mobile: mobile,
            address: address,
        };
        //console.log(addCustomerObj);

        // api-server-calling
        fetch(`http://localhost:5008/api/Customer`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addCustomerObj),
        })
            /*response-status-data*/
            .then((res) => {
                if (res.status === 201) {
                    // Successfully created (status code 201)
                    navigate('/customer-details');
                } else {
                    // Handle other status codes or errors
                    throw new Error(`Failed to add customer. Status code: ${res.status}`);
                }
            });

        /*response-body-data*/
        // .then((res) => res.json())
        // .then((data) => {
        //     if (data.acknowledged) {
        //         navigate('/customer-details');
        //     }
        // });

    }

    return (
        <div>
            <form onSubmit={addCustomer} className="flex flex-col gap-y-3">
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
                    <span className="label-text font-bold">Mobile</span>
                </div>
                <input
                    type="text"
                    placeholder="012345"
                    name="form_mobile"
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Address</span>
                </div>
                <input
                    type="text"
                    placeholder="Chittagong"
                    name="form_address"
                    className="input input-bordered w-full max-w-xs" />

                <div>
                    <input type="submit" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}

export default AddCustomerForm;