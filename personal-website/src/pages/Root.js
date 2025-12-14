// import { Outlet, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
// import Navbar from "../components/Navbar";

import App from "../App";
import Compiler from "./Compiler";
import Photography from "./Photography";

export default function Root() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Outlet /> */}
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="compiler" element={<Compiler />} /> */}
        <Route path="photography" element={<Photography />} />
      </Routes>
    </>
  );
}