import React, { useState } from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import updateLogo from "../../assets/update.png";
import { useDispatch } from "react-redux";
import { delete_todo, toggle_todo, update_todo } from "../../redux/actions/todoActions";

const TodoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch()
  const [showUpdateBtn, setShowUpdateBtn] = useState(false)
  const [updateText, setUpdateText] = useState(text)
console.log(showUpdateBtn)
  const handleToggle = () => {
    // dispatch({type: 'TOGGLE_TODO', payload:id})
    dispatch(toggle_todo(id))
  };
  const handleUpdate = () => {
    // dispatch({type: 'TOGGLE_TODO', payload:id})
    setShowUpdateBtn(true)
  };
  const handleUpdateOk = (e) => {
e.preventDefault()
    // dispatch({type: 'TOGGLE_TODO', payload:id})
    dispatch(update_todo({id,text:updateText}))
    setShowUpdateBtn(false)
  };


  const handleDelete = () => {

    dispatch(delete_todo(id))
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: "5px",
  };

  return (
    <div style={styled} className="todo-list">
      {!showUpdateBtn?<>
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
            src={updateLogo}
            className="logo"
            alt="ok logo"
            onClick={handleUpdate}
          />
        </span>
        <span>
          <img
            src={okLogo}
            className="logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
      </>:
      <form onSubmit={handleUpdateOk} className="todo-update">
          <input
            className="update-input"
            type="text"
            placeholder="Add Todo"
            value={updateText}
            onChange={(e) =>setUpdateText(e.target.value) }
          />
          <button className="update-btn">
            Update
          </button>
        </form>}
    </div>
  );
};

export default TodoItem;
