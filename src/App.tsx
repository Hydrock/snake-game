import * as React from 'react';
import Field from './containers/field';
import Settings from './containers/settings';
import { Provider } from 'react-redux';

import store from './store';

import Snake from './containers/snake';

declare global {
  interface Window { store: {}; }
}

window.store = store;

// Snake(store.getState());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Field />
          <Settings/>
          <Snake />
        </div>
      </Provider>
    );
  }
}

export default App;
