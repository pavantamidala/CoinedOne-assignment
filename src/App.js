import './App.css';
import AppRouter from './routes/AppRouter'
import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
// import chartDataAction from './actions/chartDataAction'
let App = function(props) {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App