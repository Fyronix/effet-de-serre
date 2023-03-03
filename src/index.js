import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const ROOT_ID = 'root';
const target = document.getElementById(ROOT_ID);

const renderMethod = target.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

const render = (Comp) => {
  renderMethod(
    <AppContainer>
      <Comp />
    </AppContainer>,
    target,
  );
};

render(App);

if (module?.hot) {
  module.hot.accept('./App', () => render(App));
}
