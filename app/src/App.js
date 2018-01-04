import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Layout from './layout/Layout';
import './App.css';

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <Layout />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
