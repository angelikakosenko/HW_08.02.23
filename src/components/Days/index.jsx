import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tasks from "../Tasks";
import s from "./style.module.css";

export default function Days({ id, day }) {
  const dispatch = useDispatch();
  
  const tasks = useSelector(state => state.task);




  return (
    <div className={s.globalDay}>
      <div className={s.Day}>
        <p>{day}</p>
        {tasks.map(w => <Tasks key={w.id} {...w}/>
        )}
        <button onClick={() => dispatch({ type: "DELETE_DAY", payload: id })}> x </button>
      </div>
    </div>
  );
}
