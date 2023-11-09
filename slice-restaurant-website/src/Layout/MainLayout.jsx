import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../index.css"
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import Footer from "../Components/Footer";

const MainLayout = () => {

    const {loading} = useContext(AuthContext);


    if(loading){
        return (
            <div className="flex justify-center items-center w-[100%] h-screen min-h-[700px] bg-[#553372]">
              <img src="https://i.ibb.co/zXnXcyg/gif.gif" alt="loading gif" />
            </div>
          );
    }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;