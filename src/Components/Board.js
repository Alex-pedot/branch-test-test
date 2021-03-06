import React from "react";

import Square from "./Square";

class Board extends React.Component {

  renderSquare = (i) => {
    return (
      <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
    );
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </td>
          </tr>
          <tr>
            <td>
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </td>
          </tr>
          <tr>
            <td>
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

}

export default Board;
