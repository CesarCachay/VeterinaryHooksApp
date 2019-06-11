import React, { useState } from "react";

import Form from "./components/Form";

function Appointment({ appointment, index, deleteAppointment }) {
  return (
    <div className="appointment">
      <p>
        Patient: <span>{appointment.patient}</span>
      </p>
      <p>
        Owner: <span>{appointment.owner}</span>
      </p>
      <p>
        Date: <span>{appointment.date}</span>
      </p>
      <p>
        Time: <span>{appointment.time}</span>
      </p>
      <p>
        Symptoms: <span>{appointment.symptoms}</span>
      </p>
      <input
        onClick={() => deleteAppointment(index)}
        type="submit"
        className="deleteButton u-full-width"
        value="Delete"
      />
    </div>
  );
}

function App() {
  //use State return 2 pieces
  // state = this.state
  // The function that update state is setState = this.setState()
  const [realAppointments, setRealAppointments] = useState([]);

  // Function that will allow us to create appointments
  const makeAppointment = appointment => {
    // This takes a copy of the state & concat the new appointment another way setRealAppointments(realAppointments.concat(appointment));
    setRealAppointments([...realAppointments, appointment]);
  };

  // This allow us to delete an Appointment
  const deleteAppointment = index => {
    const newAppointments = [...realAppointments];
    newAppointments.splice(index, 1);
    setRealAppointments(newAppointments);
  };

  return (
    <>
      <h1>Veterinary App</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form makeAppointment={makeAppointment} />
          </div>
          <div className="one-half column">
            {realAppointments.map((appointment, index) => (
              <Appointment
                key={index}
                index={index}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
