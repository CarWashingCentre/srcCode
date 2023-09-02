import React from "react";
import "../styles/find-car-form.css";

import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        {/* <FormGroup className="form__group">
          <input type="text" placeholder="Category" required />
        </FormGroup> */}

       <FormGroup className="select__group">
          <select>
            <option value="tw">Two Wheeler</option>
            <option value="tw1">Three Wheeler</option>
            <option value="fw">Four Wheeler</option>
            <option value="bus">Bus</option>
            <option value="truck">Truck</option>
            <option value="other">Other</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Time Slot"
            required
          />
        </FormGroup>

        {/* <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup> */}

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Submit</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
