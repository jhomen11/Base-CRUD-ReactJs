import React, { useState } from "react";

const CrudFormulario = ({
  crearData,
  editarData,
  setDataToEdit,
  dataToEdit,
}) => {
  const formInicial = { id: null, name: "", age: "" };

  //state que guarda lo que se escribe en el formulario
  const [datos, setDatos] = useState(formInicial);

  //state para manejar los errores del formulario
  const [error, setError] = useState(false);

  //funcion que guarda en el state los datos del formulario
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if (datos.name === "" || datos.age === "") {
      setError(true);
      return;
    }
    setError(false);

    /* preguntamos si los datos traen un id null, usamos la funcion crearData para pasar los datos,
    si no usamos la editarData y le pasamos los datos a editar */
    if (datos.id === null) {
      crearData(datos);
    } else {
      editarData(datos);
    }
    //resetaemos el formulario
    handleReset();
  };

  //funcion que resetea el formulario
  const handleReset = (e) => {
    setDatos(formInicial);
    setDataToEdit(null);
  };

  return (
    <div>
      {error ? <p>Todos los campos son obligatorios</p> : null}
      <form onSubmit={handleSubmit}>
        <h4>Agregar Familiar</h4>
        <input
          type="text"
          autoComplete="off"
          name="name"
          placeholder="Ingresa el Nombre"
          onChange={handleChange}
          value={datos.name}
        />
        <input
          type="number"
          autoComplete="off"
          name="age"
          placeholder="Edad"
          onChange={handleChange}
          value={datos.age}
        />
        <input type="submit" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudFormulario;
