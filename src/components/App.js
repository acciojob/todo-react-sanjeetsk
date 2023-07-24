
import React,{ useState } from "react";
import './../styles/App.css';

const App = () => {

  const [todoList, setTodoList] = useState([]);

  const handleAddItems = () => {
    const newItem = {
      name: document.getElementById("ItemName").value,
    };

    const updatedTodoList = [...todoList, newItem];

    setTodoList(updatedTodoList);

    //clear input fields

    document.getElementById('ItemName').value='';
    
  }

  const handleRemoveItem = (itemName) => {
    const updatedTodoList = todoList.filter((item)=>item.name !== itemName);
    setTodoList(updatedTodoList);
  }

  return (
    <div id="main">
        <div id="add-item">
          <input type="text" id="ItemName" />
          <button onClick={handleAddItems}>Add Todo</button>
        </div>

        {
          todoList && todoList.map((item, index) => (
            <div key={index}>
              <span className="itemName">{item.name}</span>
              <button onClick={() => handleRemoveItem(item.name)}>Delete</button>
            </div>
          ))
        }

    </div>
  )
}

export default App
