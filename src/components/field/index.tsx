import * as React from 'react';
import './style.css';

import Cell from '../cell';

interface FieldProps { 
  size: {
    width: number;
    height: number;
  };
  snake: {
    number: number;
    positionX: number;
    positionY: number;
    direction: string;
    tailLength: number;
    tailData: Array<number>;
  };
}

interface FieldState { width: number; height: number; }

class Field extends React.Component<FieldProps, FieldState> {
  
  renderCells = () => {
    const snakeNumber = this.props.snake.number;
    const cellsQuantity = this.props.size.width * this.props.size.height;
    const { tailData } = this.props.snake;

    let cells = new Array;

    for (let i = 1; i < cellsQuantity; i++) {
      cells.push(<Cell key={i} title={i} className={secCellStyle(i, snakeNumber, tailData)} />);
    }

    function secCellStyle (i: number, n: number, td: Array<number>) {
      let styleClass = '';

      if (i === n) {
        styleClass = styleClass + ' bg-red';
      } else {
        styleClass = '';
      }

      // debugger;
      for (let index = 0; index < tailData.length; index++) {
        if (i === tailData[index]) {
          styleClass = styleClass + ' bg-red';
        }
      }

      return styleClass;
    }

    return cells;
  }

  getFieldStyles = () => {
    return {
      width: 20 * this.props.size.width + 'px',
      height: 20 * this.props.size.height + 'px',
    };
  }

  render() {
    return (
      <div className="field" style={this.getFieldStyles()}>
        {this.renderCells()}
      </div>
    );
  }
}

export default Field;
