import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddAppointment = (props) => {
  const [state, setState] = useState({
    petName: "",
    ownerName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let newState = { ...state };
    newState[name] = value;
    setState({ ...newState });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    console.log(state);
    let tempApt = {
      petName: state.petName,
      ownerName: state.ownerName,
      aptDate: state.aptDate + " " + state.aptTime,
      aptNotes: state.aptNotes,
    };

    props.addAppointment(tempApt);

    setState({
      petName: "",
      ownerName: "",
      aptDate: "",
      aptTime: "",
      aptNotes: "",
    });
    props.toggleForm();
  };

  return (
    <div
      className={
        "card textcenter mt-3 mb-3 " +
        (props.formDisplay ? "" : "add-appointment")
      }
    >
      <div
        className="apt-addheading card-header bg-success text-white font-weight-bold"
        onClick={props.toggleForm}
      >
        <FaPlus />
        Add Appointment
      </div>

      <div className="card-body">
        <form id="aptForm" noValidate onSubmit={handleAdd}>
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="petName"
              readOnly
            >
              Pet Name
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="petName"
                placeholder="Pet's Name"
                value={state.petName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="ownerName"
            >
              Pet Owner
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="ownerName"
                placeholder="Owner's Name"
                value={state.ownerName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="aptDate"
            >
              Date
            </label>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                name="aptDate"
                id="aptDate"
                value={state.aptDate}
                onChange={handleChange}
              />
            </div>
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="aptTime"
            >
              Time
            </label>
            <div className="col-md-4">
              <input
                type="time"
                className="form-control"
                name="aptTime"
                id="aptTime"
                value={state.aptTime}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label className="col-md-2 text-md-right" htmlFor="aptNotes">
              Apt. Notes
            </label>
            <div className="col-md-10">
              <textarea
                className="form-control"
                rows="4"
                cols="50"
                name="aptNotes"
                id="aptNotes"
                placeholder="Appointment Notes"
                value={state.aptNotes}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row mb-0">
            <div className="offset-md-2 col-md-10">
              <button
                type="submit"
                className="btn btn-success d-block ml-auto font-weight-bold"
              >
                Add Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAppointment;
