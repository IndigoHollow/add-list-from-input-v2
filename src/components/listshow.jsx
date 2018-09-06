import React from "react";

class ListShow extends React.Component {
  render() {
    return (
      <ul>{this.props.list.map(item => <li key={item.id}>{item.text}</li>)}</ul>
    );
  }
}

export default ListShow;
