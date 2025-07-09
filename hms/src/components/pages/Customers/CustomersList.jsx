import { useLoaderData } from "react-router-dom";

function CustomersList() {
    const CustomersData = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Mobile</th>
                        <th>Address</th>
                    </tr>
                </thead>
                {/* body */}
                <tbody>
                    {CustomersData?.map((singleData) => (
                        <tr key={singleData.id}>
                            <td>{singleData.id}</td>
                            <td>{singleData.name}</td>
                            <td>{singleData.email}</td>
                            <td>{singleData.mobile}</td>
                            <td>{singleData.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomersList;