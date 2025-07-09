import { useLoaderData, useNavigate } from "react-router-dom";

function UpdateStaffForm() {
    const singleData = useLoaderData();
    const navigate = useNavigate();

    function updateStaff(event) {
        event.preventDefault();
        const name = event.target.form_name.value;
        const email = event.target.form_email.value;
        const age = event.target.form_age.value;
        const salary = event.target.form_salary.value;
        // converting data into object
        const updateStaffObj = {
            name: name,
            email: email,
            age: age,
            salary: salary,
        };
        //console.log(addStaffObj);

        // PUT request to the server
        fetch(`http://localhost:5008/api/Staff/${singleData?.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateStaffObj)
        })
            /*response-status-data*/
            .then((res) => {
                if (res.status === 200) {
                    // Successfull status
                    navigate('/staff-details');
                } else {
                    // Handle other status codes or errors
                    throw new Error(`Failed to update staff data. Status code: ${res.status}`);
                }
            });

    }
    return (
        <div>
            <form onSubmit={updateStaff} className="flex flex-col gap-y-5">
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
                    <span className="label-text font-bold">Age</span>
                </div>
                <input
                    type="number"
                    placeholder="012345"
                    name="form_age"
                    defaultValue={singleData?.age}
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Salary</span>
                </div>
                <input
                    type="number"
                    placeholder="100"
                    name="form_salary"
                    defaultValue={singleData?.salary}
                    className="input input-bordered w-full max-w-xs" />

                <div>
                    <input type="submit" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}

export default UpdateStaffForm;