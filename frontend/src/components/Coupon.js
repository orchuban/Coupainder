import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import CouponDataService from "../services/CouponService";

const Coupon = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialCouponState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentCoupon, setCurrentCoupon] = useState(initialCouponState);
  const [message, setMessage] = useState("");

  const getCoupon = id => {
    CouponDataService.get(id)
      .then(response => {
        setCurrentCoupon(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getCoupon(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCoupon({ ...currentCoupon, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentCoupon.id,
      title: currentCoupon.title,
      description: currentCoupon.description,
      published: status
    };

    CouponDataService.update(currentCoupon.id, data)
      .then(response => {
        setCurrentCoupon({ ...currentCoupon, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateCoupon = () => {
    CouponDataService.update(currentCoupon.id, currentCoupon)
      .then(response => {
        console.log(response.data);
        setMessage("The coupon was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteCoupon = () => {
    CouponDataService.remove(currentCoupon.id)
      .then(response => {
        console.log(response.data);
        navigate("/coupons");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentCoupon ? (
        <div className="edit-form">
          <h4>Coupon</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentCoupon.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentCoupon.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentCoupon.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentCoupon.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteCoupon}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateCoupon}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Coupon...</p>
        </div>
      )}
    </div>
  );
};

export default Coupon;
