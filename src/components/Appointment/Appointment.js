import React from "react";
import Moment from "react-moment";

export default function Appointment({ item, deleteAppointment }) {
  return (
    <div
      key={item}
      className="flex bg-green-100   hover:bg-gray-200 media py-3 rounded-lg overflow-hidden shadow-md"
    >
      <div>
        <button className="btn" onClick={() => deleteAppointment(item)}>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="p-2">
        <div className="flex">
          <span className="font-bold text-green-700">
            {item.petName}
          </span>
          <div className="badge">
            <span>Pet</span>
          </div>
          <span className="ml-auto mr-4">
            <Moment
              date={item.aptDate}
              parse="YYYY-MM-DD hh:mm"
              format="MMM-D h:m"
            />
          </span>
        </div>

        <div className="owner-name mt-2">
          <span className="font-italic font-semibold text-gray-600">
            Owner:{" "}
          </span>
          <span>{item.ownerName}</span>
        </div>
        <div className="text-sm mt-2">{item.aptNotes}</div>
      </div>
    </div>
  );
}
