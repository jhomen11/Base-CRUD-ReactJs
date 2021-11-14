import React from "react";

const CrudFilaTabla = ({ el, setDataToEdit, eliminarData }) => {
    let {name, age, id} = el
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>
          <button onClick={()=>setDataToEdit(el)}>Editar</button>
          <button onClick={()=>eliminarData(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};

export default CrudFilaTabla;
