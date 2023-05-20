import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const Home = () => {
  const dispatch = useDispatch();

  const { c } = useSelector((state) => state.custom);

  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };

  const addBtn25 = () => {
    dispatch({
      type: "incrementByValue",
      payload: 25,
    });
  };

  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };

  return (
    <div>
      <h2 className="value">{c}</h2>

      <div className="btn">
        <button onClick={addBtn}>Increment</button>

        <button onClick={addBtn25}>Increment By 25</button>

        <button onClick={subBtn}>Decrement</button>
      </div>
    </div>
  );
};

export default Home;
