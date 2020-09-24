import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddAppointmentForm = (props) => {
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
      className={"rounded shadow-md mt-3 mb-3 " + (props.formDisplay ? "" : "")}
    >
      <div
        className="flex gap-4 p-3 bg-green-500 text-white font-bold"
        onClick={props.toggleForm}
      >
        <FaPlus />
        Add Appointment
      </div>

      <div className={" p-8 hidden" + (props.formDisplay ? "" : "block")}>
        <form id="aptForm" noValidate onSubmit={handleAdd}>
          <div className="formFlexContainer">
            <label className="formLabel" htmlFor="petName" readOnly>
              Pet Name
            </label>
            <input
              type="text"
              className="formInput"
              name="petName"
              placeholder="Pet's Name"
              value={state.petName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formFlexContainer">
            <label className="formLabel" htmlFor="ownerName">
              Pet Owner
            </label>
            <input
              type="text"
              className="formInput"
              name="ownerName"
              placeholder="Owner's Name"
              value={state.ownerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formFlexContainer flex-row items-center justify-between">
            <div className="w-full md:w-1/2 pr-3">
              <label className="formLabel" htmlFor="aptDate">
                Date
              </label>
              <input
                type="date"
                className="formInput"
                name="aptDate"
                id="aptDate"
                value={state.aptDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="formLabel" htmlFor="aptTime">
                Time
              </label>
              <input
                type="time"
                className="formInput"
                name="aptTime"
                id="aptTime"
                value={state.aptTime}
                onChange={handleChange}
                reguired
              />
            </div>
          </div>

          <div className="formFlexContainer">
            <label className="formLabel" htmlFor="aptNotes">
              Apt. Notes
            </label>
            <textarea
              className="formInput"
              rows="4"
              cols="50"
              name="aptNotes"
              id="aptNotes"
              placeholder="Appointment Notes"
              value={state.aptNotes}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end pr-2">
            <button
              type="submit"
              className="btn bg-green-500 d-block text-bold text-white shadow-md"
            >
              Add Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAppointmentForm;
