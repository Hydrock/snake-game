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
    direction: string;
  };
}

class Snake extends React.Component<SnakeProps> {

  calculateCellNumber = (x: any, y: any) => {
    const cellsInFullRows = (y - 1) * this.props.size.width;
    const cellNumber = cellsInFullRows + x;
    return cellNumber;
  }

  checkData = () => {
    let snakeObj = this.props.snake;

    let positionX = snakeObj.positionX;
    let positionY = snakeObj.positionY;

    switch (snakeObj.direction) {
      case c.SNAKE_VERTICAL_VECTOR_UP:
        positionY = snakeObj.positionY - 1;
        if (positionY < 1) { positionY = this.props.size.height; }
        break;
      case c.SNAKE_VERTICAL_VECTOR_DOWN:
        positionY = snakeObj.positionY + 1;
        if (positionY > this.props.size.height) { positionY = 1; }
        break;
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

  changeDirection = (e: any) => {
    const { direction } = this.props.snake;

    switch (e.keyCode) {
      case 38: // up
        if (direction !== c.SNAKE_VERTICAL_VECTOR_DOWN) { 
          setSnakeData({direction: c.SNAKE_VERTICAL_VECTOR_UP});
        }
        break;
      case 40: // down
        if (direction !== c.SNAKE_VERTICAL_VECTOR_UP) { 
          setSnakeData({direction: c.SNAKE_VERTICAL_VECTOR_DOWN});
        }
        break;
      case 39: // right
        setSnakeData({direction: c.SNAKE_HORIZONTAL_VECTOR_RIGHT});

        if (direction !== c.SNAKE_HORIZONTAL_VECTOR_LEFT) { 
          setSnakeData({direction: c.SNAKE_HORIZONTAL_VECTOR_RIGHT});
        }
        break;
      case 37: // left
        if (direction !== c.SNAKE_HORIZONTAL_VECTOR_RIGHT) { 
          setSnakeData({direction: c.SNAKE_HORIZONTAL_VECTOR_LEFT});
        }
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    this.startSnake();

    document.addEventListener('keydown', (e) => {
      this.changeDirection(e);
    });
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
