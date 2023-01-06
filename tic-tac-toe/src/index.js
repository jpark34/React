import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// each square is a controlled component as the board class contains
// the states and values for each one and has full control over them
class Square extends React.Component {
    render() {
        return (
            <button 
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

// extends allows for the class to inherit methods from another class
class Board extends React.Component {
    // constructor allows you to create an instance of the object
    constructor(props) {
        // super allows children methods to gain access
        // to their parent's properties and methods
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    // convention to use handle[Event] for methods that handle events
    handleClick(i) {
        // slice creates a copy of the squares array so that
        // we are not modifying the existing array. This allows for immutability and
        // allows for us to have a pure component, where we can easily determine if
        // a change has been made to the object
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return (
            <Square 
                value={this.state.squares[i]}
                // convention to use on[Event] names for props that represent events
                onClick={() => this.handleClick(i)}
            />
        );
    }
  
    render() {
        const status = 'Next player: X';
  
        return (
            <div>
                <div className="status">
                    {status}
                </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
  
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>
                        {/* status */}
                    </div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
  
// ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  