import React, { useState } from "react";

const initialState = {
  patient: "",
  owner: "",
  date: "",
  time: "",
  symptoms: ""
};

function Form({ makeAppointment }) {
  // appointment = state actual
  // setAppointments = function that allow us to change the state
  const [appointments, setAppointments] = useState(initialState);

  // This updates the state
  const handleChange = e => {
    setAppointments({
      ...appointments, //it makes a copy of the current value of the state appointment
      [e.target.name]: e.target.value
    });
  };

  // transfer the apointment to the main component
  const handleSubmit = e => {
    e.preventDefault();
    makeAppointment(appointments);
    // It will allow to restart the state
    setAppointments(initialState);
  };

  return (
    <>
      <h2>Make an Appointment</h2>

      <form onSubmit={handleSubmit}>
        <label>Patient's Name</label>
        <input
          type="text"
          name="patient"
          className="u-full-width"
          placeholder="Name of your pet"
          onChange={handleChange}
          value={appointments.patient}
        />

        <label>Owner's Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Name of the client"
          onChange={handleChange}
          value={appointments.owner}
        />

        <label>Date</label>
        <input
          type="date"
          className="u-full-width"
          name="date"
          onChange={handleChange}
          value={appointments.date}
        />

        <label>Time</label>
        <input
          type="time"
          className="u-full-width"
          name="time"
          onChange={handleChange}
          value={appointments.time}
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={handleChange}
          value={appointments.symptoms}
        />

        <button type="submit" className="button-primary u-full-width">
          Schedule an Appointment
        </button>
      </form>
    </>
  );
}

export default Form;
