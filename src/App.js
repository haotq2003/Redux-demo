import React, { useEffect } from "react";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect, useDispatch, useSelector } from "react-redux";
import store from './Redux/store'
import { increaseCounter, decreaseCounter } from "./Actionn/actions";
import axios from "axios";
import Home from "./Componet/Home";
function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector(
    (state) => {
      return state.counter.count;
    }
  );
  const handleIncreate = () => {
 
    dispatch(increaseCounter());
  };
 

  return (
    // <div className="App">
    // <div>Hello {props.abc}</div>
    //   <div>Count: {newCount}</div>

    //   <button onClick={() => handleIncreate()}>Increase Count</button>

    //   <button onClick={() =>dispatch(decreaseCounter())}>Decrease Count</button>
    // </div>
    <Home/>
  );
}


export default App;
