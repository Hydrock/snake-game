import * as React from 'react';
import './style.css';

import Cell from '../cell';

interface FieldProps { 
  size: {
    width: number;
    height: number;
  };
}

interface FieldState { width: number; height: number; }

class Field extends React.Component<FieldProps, FieldState> {
  // constructor(props: FieldProps) {
  //   super(props);
  //   this.state = {
  //       width: this.props.size.width,
  //       height: this.props.size.height
  //   };
  // }

  // componentWillReceiveProps (nextProps: any) {
  //   this.setState({
  //     width: nextProps.width,
  //     height: nextProps.height
  //   });
  // }

  renderCells = () => {
    const cellsQuantity = this.props.size.width * this.props.size.height;

    let cells = new Array;

    for (let i = 0; i < cellsQuantity; i++) {
      cells.push(<Cell key={i} />);
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
