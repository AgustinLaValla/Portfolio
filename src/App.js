/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { createMuiTheme } from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { appTheme } from './mui-styles/muiStyles';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import About from './pages/about/About';
import Works from './pages/works/Works';
import Contact from './pages/contact/Contact';
import './App.css';

const theme = createMuiTheme(appTheme);

const AppContext = createContext();

function App() {
  const [openContactDrawer, setOpenContactDrawer] = useState(false);
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <AppContext.Provider value={{ openContactDrawer, setOpenContactDrawer }}>
            <Navbar />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/about" component={About} />
              <Route exact path="/works" component={Works} />
              <Route exact path="/contact" component={Contact}/>
              <Redirect to="/home" />
            </Switch>
            <Footer />
          </AppContext.Provider>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export const contactDrawerContext = () => useContext(AppContext);

export default App;

