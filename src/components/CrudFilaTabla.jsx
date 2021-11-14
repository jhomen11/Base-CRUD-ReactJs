import React from "react";

const CrudFilaTabla = ({ el }) => {
    
  return (
    <>
      <tr>
        <td>{el.name}</td>
        <td>{el.age}</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
    </>
  );
};

export default CrudFilaTabla;
