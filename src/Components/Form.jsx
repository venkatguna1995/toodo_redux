import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../ToodoReducer";
import { update } from "../ToodoReducer";
import { useNavigate, useParams } from "react-router-dom";

const Form = () => {
  const [toodoData, setToodoData] = useState("");
  const data = useSelector((state) => state.toodo);
  const [id, setId] = useState(0);
  const param = useParams();
  const navigate = useNavigate()
  const disPatchToodoValue = useDispatch();
  useEffect(() => {
    if (param.id) {
      console.log(param.id);
      console.log(data);
      const findId = data.find((tood) => +tood.id === +param.id);
      console.log(findId);
      setToodoData(findId.toodoData);
    }
  },[param]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.length > 0) {
      disPatchToodoValue(
        addTask({ id: data[data.length - 1].id + 1, toodoData })
      );
    } else {
      disPatchToodoValue(addTask({ id: id, toodoData }));
    }
    setToodoData("");
  };
  const handleUpdate =(e)=>{
    e.preventDefault();
    if(param.id){
      disPatchToodoValue(update({ id: param.id, toodoData }));
      setToodoData("");
      navigate('/')
    }
  }
  return (
    <form className="container">
      <input
        type="text"
        placeholder="Enter Task"
        value={toodoData}
        onChange={(e) => setToodoData(e.target.value)}
      />
      {!param.id ? (
        <button onClick={handleSubmit}>Add Task</button>
      ) : (
        <button onClick={handleUpdate}>Update</button>
      )}
    </form>
  );
};
export default Form;
