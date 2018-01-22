import * as React from 'react';
import Field from './containers/field';
import Settings from './containers/settings';
import { Provider } from 'react-redux';

import store from './store';

declare global {
  interface Window { store: {};
  }
}

window.store = store;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Field />
          <Settings/>
        </div>
      </Provider>
    );
  }
}

export default App;
