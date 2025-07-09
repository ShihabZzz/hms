import { useLoaderData, useNavigate } from "react-router-dom";

function UpdateCustomerForm() {
    const singleData = useLoaderData();
    const navigate = useNavigate();

    function updateCustomer(event) {
        event.preventDefault();
        const name = event.target.form_name.value;
        const email = event.target.form_email.value;
        const mobile = event.target.form_mobile.value;
        const address = event.target.form_address.value;
        // converting data into object
        const updateCustomerObj = {
            name: name,
            email: email,
            mobile: mobile,
            address: address,
        };
        //console.log(addCustomerObj);

        // PUT request to the server
        fetch(`http://localhost:5008/api/Customer/${singleData?.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateCustomerObj)
        })
            /*response-status-data*/
            .then((res) => {
                if (res.status === 200) {
                    // Successfull status
                    navigate('/customer-details');
                } else {
                    // Handle other status codes or errors
                    throw new Error(`Failed to update customer data. Status code: ${res.status}`);
                }
            });

    }
    return (
        <div>
            <form onSubmit={updateCustomer} className="flex flex-col gap-y-5">
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
                    <span className="label-text font-bold">Mobile</span>
                </div>
                <input
                    type="text"
                    placeholder="012345"
                    name="form_mobile"
                    defaultValue={singleData?.mobile}
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Address</span>
                </div>
                <input
                    type="text"
                    placeholder="100"
                    name="form_address"
                    defaultValue={singleData?.address}
                    className="input input-bordered w-full max-w-xs" />

                <div>
                    <input type="submit" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}

export default UpdateCustomerForm;