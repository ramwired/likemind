import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
