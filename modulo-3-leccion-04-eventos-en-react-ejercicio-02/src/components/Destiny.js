import React from "react";

class Destiny extends React.Component {
  render() {
    return (
        <label for="cities">Destinos:</label>
        <select id="city" name="city">
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sidney">Sidney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>

      const alertButton = (
        <button onChange={ /* aquí va la función */ }>
          Pedir más información
        </button>
        const onClickListener = ev => {
            alert('Tu destino es viajar a');
          };
          const alertButton = (
            <button onChange={onClickListener}>Tu destino es viajar a, siendo la ciudad seleccionada</button>
          );
      );
    );
  }
}

export default Destiny.js;
