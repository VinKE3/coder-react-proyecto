import React from "react";
import Footer from "./Footer";

const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu Presupuesto"
          />
        </div>
        <input type="submit" value="confirmar" />
      </form>
    </div>
    
  );
};

export default NuevoPresupuesto;
