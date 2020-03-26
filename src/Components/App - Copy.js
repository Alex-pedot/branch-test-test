import React from "react";

import Header from "./Include/Header";
import Footer from "./Include/Footer";
import Board from "./Board";

import Main from "../Assets/css/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{squares: Array(9).fill(null)}],
      Xisnext: true,
      stepNumber: 0
    };
  }

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.Xisnext?"X":"O";
    this.setState({
      history:history.concat([{squares:squares}]),
      Xisnext:!this.state.Xisnext,
      stepNumber: history.length
    });
  }

  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      Xisnext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?'Go to move #' + move :'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if(winner){
      status = "Winner is " + winner;
    }else {
      status = 'Next player: ' + (this.state.Xisnext ? 'X' : 'O');
    }
    return (
      <>
        <Header/>
        <div className = "row">
          <div className="col-md-4">
            <div className="col-md-12">{status}</div>
            <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
          </div>
          <div className="col-md-4">
            <ol>{moves}</ol>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
