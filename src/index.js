import React from "react";
import ReactDOM from "react-dom";
import ListAdd from "./components/listadd";
import ListShow from "./components/listshow";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);

    this.state = {
      list: [
        {
          id: 1,
          text: "first"
        },
        {
          id: 2,
          text: "second"
        }
      ],
      inputValue: "",
      lastKey: 0
    };
  }

  lastKey() {
    return Math.max.apply(Math, this.state.list.map(item => item.id));
  }

  handleChangeInput(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleAddItem(e) {
    let last = this.lastKey() + 1;
    this.setState({
      list: [...this.state.list, { id: last, text: this.state.inputValue }]
    });
  }

  render() {
    return (
      <React.Fragment>
        <ListAdd
          handleChange={this.handleChangeInput}
          handleClick={this.handleAddItem}
          valuen={this.state.inputValue}
        />
        <ListShow list={this.state.list} />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
