import React from "react";

const CrudFilaTabla = ({ el, setDataToEdit, eliminarData }) => {
  let { name, age, id } = el;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>
          <div className="btn-group">
            <button
              className="btn btn-outline-primary"
              onClick={() => setDataToEdit(el)}
            >
              Editar
            </button>
            <button className="btn btn-outline-danger" onClick={() => eliminarData(id)}>
              Eliminar
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default CrudFilaTabla;
