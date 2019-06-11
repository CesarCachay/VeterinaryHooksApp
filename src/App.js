import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
  //use State return 2 pieces
  // state = this.state
  // The function that update state is setState = this.setState()
  const [realAppointments, setRealAppointments] = useState(
    JSON.parse(localStorage.getItem("realAppointments") || "[]")
  );

  // Function that will allow us to create appointments
  const makeAppointment = appointment => {
    // This takes a copy of the state & concat the new appointment another way setRealAppointments(realAppointments.concat(appointment));
    setRealAppointments([...realAppointments, appointment]);
    localStorage.setItem(
      "realAppointments",
      JSON.stringify([...realAppointments, appointment])
    );
  };

  // This allow us to delete an Appointment
  const deleteAppointment = index => {
    const newAppointments = [...realAppointments];
    newAppointments.splice(index, 1);
    setRealAppointments(newAppointments);
    localStorage.setItem("realAppointments", JSON.stringify(newAppointments));
  };

  // This will allow us to show appointments conditionally
  const title =
    Object.keys(realAppointments).length === 0
      ? "No appointments yet"
      : "Manage the appointments here";

  // useEffect(() => {
  //   let initialAppointments = JSON.parse(
  //     localStorage.getItem(realAppointments)
  //   );
  //   if (initialAppointments) {
  //     localStorage.setItem(
  //       "realAppointments",
  //       JSON.stringify(realAppointments)
  //     );
  //   } else {
  //     localStorage.setItem(realAppointments, JSON.stringify([]));
  //   }
  // });

  return (
    <>
      <h1>Veterinary App</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form makeAppointment={makeAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
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
