import * as React from 'react';
import './style.css';

interface CellProps { 
  title: number;
  className: string;
}

class Cell extends React.Component<CellProps> {
  render() {
    return (
      <div title={String(this.props.title)} className={this.props.className + ' cell'} />
    );
  }
}

export default Cell;
