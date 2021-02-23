import React from "react";

class CitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(ev) {
    this.props.handleCity(ev.target.value);
  }

  render() {
    return (
      <>
        <label for="city">Nombres de ciudades</label>
        <select onChange={this.handleSelect}>
          <option value="Madrid">Madrid</option>
          <option value="Málaga">Málaga</option>
          <option value="Bali">Bali</option>
          <option value="LA">Los Angeles</option>
          <option value="Paris">Paris</option>
        </select>
      </>
    );
  }
}

export default CitySelector;
