import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { createMuiTheme } from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { appTheme } from './mui-styles/muiStyles';
import './App.css';

const theme = createMuiTheme(appTheme);

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route exact path="/" />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
