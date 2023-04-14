import { Outlet, Link } from "react-router-dom";
import { Route, Router, Routes } from "react-router";
import Navbar from "../components/Navbar";

import App from "../App";
import Compiler from "./Compiler";

export default function Root() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Outlet /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="compiler" element={<Compiler />} />
      </Routes>
    </>
  );
}