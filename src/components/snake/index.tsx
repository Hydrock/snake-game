import * as React from 'react';
import { setSnakeData } from '../../actions/index';
import * as c from '../../constants';

interface SnakeProps { 
  size: {
    width: number;
    height: number;
  };
  snake: {
    number: number;
    positionX: number;
    positionY: number;
    verticalVector: string;
    horizontalVector: string;
  };
}

class Snake extends React.Component<SnakeProps> {

  // getStartPosition = () => {
  //   const startHorizontal = this.props.size.width / 2;
  //   const startVertical = this.props.size.height / 2;
  //   return {startHorizontal, startVertical};
  // }

  // calculateCellNumberStart = () => {
  //   // const coordinates = this.getStartPosition();
  //   const coordinates = {
  //     startHorizontal: this.props.snake.positionX,
  //     startVertical: this.props.snake.positionY,
  //   };
  //   const cellsInFullRows = (coordinates.startVertical - 1) * this.props.size.width;
  //   const cellNumber = cellsInFullRows + coordinates.startHorizontal;
  //   return cellNumber;
  // }

  calculateCellNumber = (x: any, y: any) => {
    const coordinates = {
      startHorizontal: x,
      startVertical: y,
    };
    const cellsInFullRows = (coordinates.startVertical - 1) * this.props.size.width;
    const cellNumber = cellsInFullRows + coordinates.startHorizontal;
    return cellNumber;
  }

  checkData = () => {
    let snakeObj = this.props.snake;

    console.log(snakeObj);
    let positionX;
    let positionY;

    switch (snakeObj.horizontalVector) {
      case c.SNAKE_HORIZONTAL_VECTOR_RIGHT:
        positionX = snakeObj.positionX + 1;
        if (positionX > this.props.size.width) { positionX = 1; }
        break;
      case c.SNAKE_HORIZONTAL_VECTOR_LEFT:
        positionX = snakeObj.positionX - 1;
        if (positionX < 1) { positionX = this.props.size.width; }
        break;
      default:
        break;
    }
    
    switch (snakeObj.verticalVector) {
      case c.SNAKE_VERTICAL_VECTOR_UP:
        positionY = snakeObj.positionY - 1;
        if (positionY < 1) { positionY = this.props.size.height; }
        break;
      case c.SNAKE_VERTICAL_VECTOR_DOWN:
        positionY = snakeObj.positionY + 1;
        if (positionY > this.props.size.height) { positionY = 1; }
        break;
      default:
        break;
    }

    setSnakeData({
      number: this.calculateCellNumber(positionX, positionY),
      positionX: positionX,
      positionY: positionY
    });
  }

  startSnake = () => {
    // let snake = this.props.snake;
    let checkData = this.checkData;

    function step() {
      setTimeout(function () { checkData(); step(); }, 1000);
    }

    step();
  }

  componentDidMount() {
    // setSnakeData({
    //   number: this.calculateCellNumberStart()
    // });

    this.startSnake();
  }

  render() {
    return (
      <div>
        asffasfasf
      </div>
    );
  }
}

export default Snake;
