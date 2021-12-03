import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { myTheme } from './theme';


ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')  
);