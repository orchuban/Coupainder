import React, { useState } from "react";
import CouponDataService from "../services/CouponService";

const AddCoupons = () => {
  const initialCouponState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [coupon, setCoupon] = useState(initialCouponState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCoupon({ ...coupon, [name]: value });
  };

  const saveCoupon = () => {
    var data = {
      title: coupon.title,
      description: coupon.description
    };

    CouponDataService.create(data)
      .then(response => {
        setCoupon({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCoupon = () => {
    setCoupon(initialCouponState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCoupon}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={coupon.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={coupon.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveCoupon} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCoupons;
