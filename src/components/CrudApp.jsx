import React, { useState } from "react";
import CrudFormulario from "./CrudFormulario";
import CrudTabla from "./CrudTabla";

const dbInicial = [
  { id: 1, name: "Yelitza Godoy", age: 40 },
  { id: 2, name: "Jhonny Mendoza", age: 42 },
  { id: 3, name: "David Mendoza", age: 15 },
  { id: 4, name: "Juan Araujo", age: 7 },
  { id: 5, name: "Yerlimar Godoy", age: 36 },
];

const CrudApp = () => {
  //State principal donde estan alamcenados todos los datos a mostrar (db)
  const [familia, setFamilia] = useState(dbInicial);

  //state que guarda los datos que se van a editar
  const [dataToEdit, setDataToEdit] = useState(null);

  //funcion que recibe los datos del formulario y los guarda en el state principal
  const crearData = (datos) => {
    datos.id = Date.now();
    setFamilia([...familia, datos]);
  };

  /* funcion que edita la data que viene del formulario, creamos un nuevo array donde se almacenara la data editada,
  recorremos el array original y si el id del elemnto del array original es igual al id de la data editada la sustituye,
  en caso contrario lo deja igual */
  const editarData = (data) => {
    let dataEditada = familia.map((el) => (el.id === data.id ? data : el));
    setFamilia(dataEditada);
  };

  const eliminarData = (id) => {
    let dataEliminada = familia.filter(el => el.id !==id)
    setFamilia(dataEliminada)
  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudFormulario
        crearData={crearData}
        editarData={editarData}
        setDataToEdit={setDataToEdit}
        dataToEdit={dataToEdit}
      />
      <CrudTabla
        dbInicial={familia}
        eliminarData={eliminarData}
        setDataToEdit={setDataToEdit}
        
      />
    </div>
  );
};

export default CrudApp;
