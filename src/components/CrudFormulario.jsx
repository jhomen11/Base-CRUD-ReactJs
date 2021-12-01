import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    if (dataToEdit) {
      setDatos(dataToEdit);
    } else {
      setDatos(formInicial);
    }
  }, [dataToEdit]);

  //funcion que guarda en el state los datos del formulario
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };
  //funcion que procesa la informacion del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if (datos.name === "" || datos.age === "") {
      setError(true);
      return;
    }
    setError(false);

    /* preguntamos si los datos traen un id null, usamos la funcion crearData para pasar los datos,
    si no usamos la funcion editarData y le pasamos los datos a editar */
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
    <>
      {error ? <div className="alert alert-danger">Todos los campos son obligatorios</div> : null}
      <form onSubmit={handleSubmit}>
        <h4>{dataToEdit ? "Editar Familiar" : "Agregar Familiar"}</h4>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            autoComplete="off"
            id="name"
            name="name"
            placeholder="Ingresa el Nombre"
            onChange={handleChange}
            value={datos.name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Edad
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            autoComplete="off"
            name="age"
            placeholder="Edad"
            onChange={handleChange}
            value={datos.age}
          />
        </div>
        <div className="btn-group">
          <input className="btn btn-outline-success" type="submit" />
          <input
            className="btn btn-outline-secondary"
            type="reset"
            value="Limpiar"
            onClick={handleReset}
          />
        </div>
      </form>
    </>
  );
};

export default CrudFormulario;
