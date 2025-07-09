import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from "./components/pages/Home/Home";
import Bookings from "./components/pages/Bookings/Bookings";
import AddBooking from "./components/pages/Bookings/AddBooking.jsx";
import ManageBookings from "./components/pages/Bookings/ManageBookings.jsx";
import UpdateBooking from "./components/pages/Bookings/UpdateBooking.jsx";
import Customers from "./components/pages/Customers/Customers.jsx";
import Alert from "./components/pages/Alert/Alert.jsx";
import SoleCustomerDetails from "./components/pages/Customers/SoleCustomerDetails.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import AddCustomer from "./components/pages/Customers/AddCustomer.jsx";
import ManageCustomers from "./components/pages/Customers/ManageCustomers.jsx";
import UpdateCustomer from "./components/pages/Customers/UpdateCustomer.jsx";
import Staffs from "./components/pages/Staff/Staffs.jsx";
import AddStaff from "./components/pages/Staff/AddStaff.jsx";
import ManageStaffs from "./components/pages/Staff/ManageStaffs.jsx";
import UpdateStaff from "./components/pages/Staff/UpdateStaff.jsx";

function App() {
  // browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/booking-details",
      element: <Bookings></Bookings>,
      loader: function () {
        return fetch(`http://localhost:5008/api/Booking`)
      },
    },
    {
      path: "/add-booking",
      element: <AddBooking></AddBooking>,
      loader: function () {
        return fetch(`http://localhost:5008/api/Customer`)
      },
    },
    {
      path: "/manage-bookings",
      element: <ManageBookings></ManageBookings>,
      loader: function () {
        return fetch(`http://localhost:5008/api/Booking`)
      },
    },
    {
      path: "/update-booking/:id",
      element: <UpdateBooking></UpdateBooking>,
      loader: function ({ params }) {
        return fetch(`http://localhost:5008/api/Booking/${params.id}`)
      },
    },
    {
      path: "/customer-details",
      element: <Customers></Customers>,
      loader: function () {
        return fetch(`http://localhost:5008/api/Customer`)
      },
    },
    {
      path: "/sole-customer-details/:id",
      element: <SoleCustomerDetails></SoleCustomerDetails>,
      loader: function ({ params }) {
        return fetch(`http://localhost:5008/api/Customer/${params.id}`)
      },
    },
    {
      path: "/alert",
      element: <Alert></Alert>,
    },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
    {
      path: "/add-customer",
      element: <AddCustomer></AddCustomer>,
    },
    {
      path: "/manage-customers",
      element: <ManageCustomers></ManageCustomers>,
      loader: function () {
        return fetch(`http://localhost:5008/api/Customer`)
      },
    },
    {
      path: "/update-customer/:id",
      element: <UpdateCustomer></UpdateCustomer>,
      loader: function ({ params }) {
        return fetch(`http://localhost:5008/api/Customer/${params.id}`)
      },
    },
    {
      path: "/staff-details",
      element: <Staffs></Staffs>,
      loader: function () {
        return fetch(`http://localhost:5008/api/Staff`)
      },
    },
    {
      path: "/add-staff",
      element: <AddStaff></AddStaff>,
    },
    {
      path: "/manage-staffs",
      element: <ManageStaffs></ManageStaffs>,
      loader: function () {
        return fetch(`http://localhost:5008/api/Staff`)
      },
    },
    {
      path: "/update-staff/:id",
      element: <UpdateStaff></UpdateStaff>,
      loader: function ({ params }) {
        return fetch(`http://localhost:5008/api/Staff/${params.id}`)
      },
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
