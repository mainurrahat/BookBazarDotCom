// import React from 'react'

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";

const Roots = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* <h2>hello from root </h2> */}
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
