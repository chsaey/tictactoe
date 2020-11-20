import React, {Component} from 'react';
import Square from './Square';
import {Col,Row,Container,Button} from 'react-bootstrap';
class Game extends Component {
    constructor(props){
      //always call super
        super(props);
        //set state
            this.state = {
                squares: Array(9).fill(null),
                x: true,
            };    
 
   
    }

    //function to handle passing data to square component, returns a square component
    renderSquare(i) {
      return( 
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        />
       );
    }

    handleClick(i){
      //make a copy of the squares array to not mutate state
      const squares = this.state.squares.slice();
      //if a winner is found or the square is taken
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.x ? 'X' : 'O';
      this.setState({
        squares:squares,
        x: !this.state.x,
      });
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else if(!this.state.squares.includes(null)) {
        status = 'Tie!'
      } else{
        status = 'Turn: ' + ( this.state.x ? 'X' : 'O');
      }
      
      return (
        <div>
          <Container fluid>
          <Row>
          <Col md={4}></Col>
          <Col md={4} class="mid">
          <div class="side"></div>
          <div className="status">{status}</div>
          {/*By calling render square, we can pass a prop to each square*/}
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
          <div class="side"></div>
          <br/>
          <button onClick={() => window.location.reload(false)}>restart</button>
          </Col>
          <Col md={4}></Col>

          <div>

    </div>
          </Row>
          </Container>
        </div>
      );
    }
  }

  export default Game

  function calculateWinner(squares) {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //Loop through each sub array in win conditions, check squares if index match
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }



