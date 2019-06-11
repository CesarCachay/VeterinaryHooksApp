import React from "react";

function Appointment({ appointment, index, deleteAppointment }) {
  const handleClick = () => {
    deleteAppointment(index);
  };
  return (
    <div className="appointment">
      <p>
        Patient: <span>{appointment.patient}</span>{" "}
      </p>
      <p>
        Owner: <span>{appointment.owner}</span>{" "}
      </p>
      <p>
        Date: <span>{appointment.date}</span>{" "}
      </p>
      <p>
        Time: <span>{appointment.time}</span>{" "}
      </p>
      <p>
        Symptoms: <span>{appointment.symptoms}</span>{" "}
      </p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Appointment;
