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

  getStartPosition = () => {
    const startHorizontal = this.props.size.width / 2;
    const startVertical = this.props.size.height / 2;
    return {startHorizontal, startVertical};
  }

  calculateCellNumberStart = () => {
    // const coordinates = this.getStartPosition();
    const coordinates = {
      startHorizontal: this.props.snake.positionX,
      startVertical: this.props.snake.positionY,
    };
    const cellsInFullRows = (coordinates.startVertical - 1) * this.props.size.width;
    const cellNumber = cellsInFullRows + coordinates.startHorizontal;
    return cellNumber;
  }

  calculateCellNumber = (x: number, y: number) => {
    const coordinates = {
      startHorizontal: x,
      startVertical: y,
    };
    const cellsInFullRows = (coordinates.startVertical - 1) * this.props.size.width;
    const cellNumber = cellsInFullRows + coordinates.startHorizontal;
    return cellNumber;
  }

  startSnake = () => {
    let snake = this.props.snake;

    let checkData = (snakeObj: any) => {
      console.log(snakeObj);
      let positionX;
      let positionY;

      switch (snakeObj.horizontalVector) {
        case c.SNAKE_HORIZONTAL_VECTOR_RIGHT:
          positionX = snakeObj.positionX + 1;
          break;
        case c.SNAKE_HORIZONTAL_VECTOR_LEFT:
          positionX = snakeObj.positionX - 1;
          break;
        default:
          break;
      }
      
      switch (snakeObj.verticalVector) {
        case c.SNAKE_VERTICAL_VECTOR_UP:
          positionY = snakeObj.positionY - 1;
          break;
        case c.SNAKE_VERTICAL_VECTOR_DOWN:
          positionY = snakeObj.positionY + 1;
          break;
        default:
          break;
      }

      console.log()

      setSnakeData({
        number: this.calculateCellNumber(positionX, positionY),
        positionX: positionX,
        positionY: positionY
      });
    };

    function step() {
      setTimeout(function () { checkData(snake); step(); }, 1000);
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
