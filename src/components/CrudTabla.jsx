import React from "react";
import CrudFilaTabla from "./CrudFilaTabla";

const CrudTabla = ({ dbInicial, setDataToEdit, eliminarData }) => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dbInicial.map((el) => (
            <CrudFilaTabla
              key={el.id}
              el={el}
              setDataToEdit={setDataToEdit}
              eliminarData={eliminarData}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CrudTabla;
