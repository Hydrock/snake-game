import * as React from 'react';
import Field from './components/field';
import Settings from './components/settings';

declare global {
  interface Window { snakeSettings: {
      size: Array<number>
    }; 
  }
}

// init settings
window.snakeSettings = {
  size: [10, 10]
};

// let size = [10, 10];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Field size={window.snakeSettings.size}/>
        <Settings size={window.snakeSettings.size}/>
      </div>
    );
  }
}

export default App;
