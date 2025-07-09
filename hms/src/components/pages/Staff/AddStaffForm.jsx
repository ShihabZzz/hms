import { useNavigate } from "react-router-dom";

function AddStaffForm() {
    const navigate = useNavigate();

    function addStaff(event) {
        event.preventDefault();

        const name = event.target.form_name.value;
        const email = event.target.form_email.value;
        const age = event.target.form_age.value;
        const salary = event.target.form_salary.value;
        // converting data into object
        const addStaffObj = {
            name: name,
            email: email,
            age: age,
            salary: salary,
        };
        //console.log(addStaffObj);

        // api-server-calling
        fetch(`http://localhost:5008/api/Staff`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addStaffObj),
        })
            /*response-status-data*/
            .then((res) => {
                if (res.status === 200) {
                    // Successfully created 
                    navigate('/staff-details');
                } else {
                    // Handle other status codes or errors
                    throw new Error(`Failed to add staff. Status code: ${res.status}`);
                }
            });

        /*response-body-data*/
        // .then((res) => res.json())
        // .then((data) => {
        //     if (data.acknowledged) {
        //         navigate('/staff-details');
        //     }
        // });

    }

    return (
        <div>
            <form onSubmit={addStaff} className="flex flex-col gap-y-3">
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
                    <span className="label-text font-bold">Age</span>
                </div>
                <input
                    type="number"
                    placeholder="25"
                    name="form_age"
                    className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text font-bold">Salary</span>
                </div>
                <input
                    type="number"
                    placeholder="25000"
                    name="form_salary"
                    className="input input-bordered w-full max-w-xs" />

                <div>
                    <input type="submit" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}

export default AddStaffForm;