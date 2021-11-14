import React from "react";
import CrudFilaTabla from "./CrudFilaTabla";

const CrudTabla = ({ dbInicial }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dbInicial.map((el) => (
            <CrudFilaTabla key={el.id} el={el} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTabla;
