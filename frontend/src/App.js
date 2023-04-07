import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo1 from './assets/logo1.jpg'

import AddCoupons from "./components/AddCoupons";
import Coupon from "./components/Coupon";
import CouponsList from "./components/CouponsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/coupons" className="navbar-brand">
          CoupAinder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/coupons"} className="nav-link">
              oupons List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Coupon
            </Link>
          </li>
        </div>
        <img src={logo1} style={{ maxWidth: "8%" }} />

      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<CouponsList />} />
          <Route path="/coupons" element={<CouponsList />} />
          <Route path="/add" element={<AddCoupons />} />
          <Route path="/coupons/:id" element={<Coupon />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
