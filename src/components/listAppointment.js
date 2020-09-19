import React from "react";
import { FaTimes } from "react-icons/fa";
import Moment from "react-moment";

const ListAppointment = (props) => {
  return (
    <div className="appointment-list item-list">
      {props.appointments.map((item) => (
        <div
          key={item}
          className="pet-item media py-3 rounded-lg overflow-hidden shadow-md"
        >
          <div className="mr-3">
            <button
              className="pet-delete btn btn-sm"
              onClick={() => props.deleteAppointment(item)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="pet-info media-body">
            <div className="pet-head d-flex">
              <span className="pet-name font-bold text-green-700">
                {item.petName}
              </span>
              <div className="badge">
              <span>Pet</span>
            </div>
              <span className="apt-date ml-auto mr-4">
                <Moment
                  date={item.aptDate}
                  parse="YYYY-MM-DD hh:mm"
                  format="MMM-D h:m"
                />
              </span>
            </div>

            <div className="owner-name">
              <span className="label-item font-italic font-semibold text-gray-600">
                Owner:{" "}
              </span>
              <span>{item.ownerName}</span>
            </div>
            <div className="apt-notes text-sm">{item.aptNotes}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListAppointment;
