import React, { Component } from "react";
import "./app.css";

class Cell extends Component {
  render() {
    const { value, onClickHandle, cellno } = this.props;
    const cellStyle = {
      backgroundColor: "lightgreen",
      cursor: value === -1 ? "pointer" : "default",
    };
    return (
      <div className="cell" style={cellStyle} onClick={() => onClickHandle(cellno)}>
        {value === 1 ? "X" : value === 0 ? "0" : ""}
      </div>
    );
  }
}

export default Cell;
