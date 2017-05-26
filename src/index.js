import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import App from './components/App';
// import rootReducer from './reducers';

export const history = createBrowserHistory();

const store = createStore(
  // connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

module.hot.accept('./components/App', () => {
  renderDevApp();
});

renderDevApp();

function renderDevApp() {
  render(
    <Provider store={store}>
      <AppContainer>
        <App history={history} />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
}
