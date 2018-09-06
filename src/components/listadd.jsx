import React from "react";

class ListAdd extends React.Component {
  render() {
    return (
      <div className="listadd">
        <input
          placeholder="Add an item"
          onChange={this.props.handleChange}
          value={this.props.valuen}
        />
        <button onClick={this.props.handleClick}>+</button>
      </div>
    );
  }
}

export default ListAdd;
