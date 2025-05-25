import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer";

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
