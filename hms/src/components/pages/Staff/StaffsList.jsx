import { useLoaderData } from "react-router-dom";

function StaffsList() {
    const StaffsData = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                {/* body */}
                <tbody>
                    {StaffsData?.map((singleData) => (
                        <tr key={singleData.id}>
                            <td>{singleData.name}</td>
                            <td>{singleData.email}</td>
                            <td>{singleData.age}</td>
                            <td>{singleData.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StaffsList;