import React from "react";
import Appointment from "../Appointment/Appointment";

export default function AppointmentList (props) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-16 mb-16">
      {props.appointments.map((item) => (
        <Appointment item={item} deleteAppointment={props.deleteAppointment} />
      ))}
    </div>
  );
};
