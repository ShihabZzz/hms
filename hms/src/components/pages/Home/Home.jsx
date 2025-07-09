import Navbar from "../../shared/Navbar/Navbar";
import About from "../About/About";

function Home() {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <h1 className="text-red-500 text-center my-6 font-semibold">Hotel Management System</h1>
            <About></About>
        </div>
    )
}

export default Home;