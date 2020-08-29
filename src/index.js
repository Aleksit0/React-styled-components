import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';
import {Theme} from './components/theme/Theme';

const root = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme = {Theme}>
    <App/>
  </ThemeProvider>,
  root
);