import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteTask } from "../ToodoReducer";
import { Link } from "react-router-dom";

const Display = () => {
  const toodoData = useSelector((state) => state.toodo);
  const disPatchToodoValue = useDispatch();
  const deleteTasks = (id) =>{
    disPatchToodoValue(deleteTask(id))
  }
  return (
    <div className="display">
      {toodoData.map((item) =>(
        <div className="items" key={item.id}>
          <p>{item.toodoData}</p>
          <Link id="button" to={`/edit/${item.id}`}>Edit</Link>
          <button id="button2" onClick={()=>deleteTasks(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Display;
