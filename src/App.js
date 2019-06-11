import React, { useState } from "react";

function Form() {
  return (
    <>
      <h2>Crear Cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="patient"
          className="u-full-width"
          placeholder="Nombre Mascota"
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
        />

        <label>Fecha</label>
        <input type="date" className="u-full-width" name="date" />

        <label>Hora</label>
        <input type="time" className="u-full-width" name="time" />

        <label>Sintomas</label>
        <textarea className="u-full-width" name="symptoms" />

        <button type="submit" className="button-primary u-full-width">
          Agregar
        </button>
      </form>
    </>
  );
}

function App() {
  //use State return 2 pieces
  // state = this.state
  // The function that update state is setState = this.setState()
  const [state, setState] = useState([]);

  return (
    <>
      <h1>Veterinary App</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column" />
        </div>
      </div>
    </>
  );
}

export default App;
