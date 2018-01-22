import * as React from 'react';
import './style.css';

import Cell from '../cell';

interface FieldProps { size: Array<number>; }
interface FieldState { width: number; height: number; }

class Field extends React.Component<FieldProps, FieldState> {
  constructor(props: FieldProps) {
    super(props);
    this.state = {
        width: this.props.size[0],
        height: this.props.size[1],
    };
  }

  renderCells = () => {
    const cellsQuantity = this.state.width * this.state.height;

    let cells = new Array;

    for (let i = 0; i < cellsQuantity; i++) {
      cells.push(<Cell/>);
    }

    return cells;
  }

  getFieldStyles = () => {
    return {
      width: 20 * this.state.width + 'px',
      height: 20 * this.state.height + 'px',
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
