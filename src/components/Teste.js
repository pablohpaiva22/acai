import React, { Component } from "react";
import styles from "./Teste.module.css";

export default class Teste extends Component {
  constructor(props) {
    super(props);

    this.state = { contar: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ contar: this.state.contar + 1 });
  }

  render() {
    return (
      <div className={`${styles.container} container`}>
        <button onClick={this.handleClick}>hello</button>
        <p>{this.state.contar}</p>
      </div>
    );
  }
}
