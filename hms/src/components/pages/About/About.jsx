import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
    const [totalCustomers, setTotalCustomers] = useState(null);
    const [totalBookings, setTotalBookings] = useState(null);
    const [totalStaff, setTotalStaff] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const customerResponse = await fetch("http://localhost:5008/api/Customer");
                const bookingResponse = await fetch("http://localhost:5008/api/Booking");
                const staffResponse = await fetch("http://localhost:5008/api/Staff");

                const customerData = await customerResponse.json();
                const bookingData = await bookingResponse.json();
                const staffData = await staffResponse.json();

                setTotalCustomers(customerData.length);
                setTotalBookings(bookingData.length);
                setTotalStaff(staffData.length);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures the effect runs only once on mount

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/z4KXsBX/banner.png" className="max-w-sm rounded-lg" />
                <div>
                    <div className="flex flex-wrap justify-center mt-4">
                        <div className="rounded-lg bg-indigo-300 mx-2 my-2 p-4 w-64">
                            <h2 className="text-xl font-bold mb-2">{totalCustomers !== null ? totalCustomers : "Loading..."}</h2>
                            <p>Total Customers</p>
                        </div>
                        <div className="rounded-lg bg-violet-300 mx-2 my-2 p-4 w-64">
                            <h2 className="text-xl font-bold mb-2">{totalStaff !== null ? totalStaff : "Loading..."}</h2>
                            <p>Staff</p>
                        </div>
                        <div className="rounded-lg bg-sky-300 mx-2 my-2 p-4 w-64">
                            <h2 className="text-xl font-bold mb-2">{totalBookings !== null ? totalBookings : "Loading..."}</h2>
                            <p>Bookings</p>
                        </div>
                        <div className="rounded-lg bg-emerald-300 mx-2 my-2 p-4 w-64 text-center font-semibold">
                            <Link to="/staff-details">
                                Manage Staff
                            </Link>
                            {/* <p>Manage Staff</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
