import React, {useState} from 'react';
import Button from "./Button"

import "./AddTask.css"

const AddTask = ({handleTaskAddition}) => {
    
    const [inputData, setInputData] = useState("")

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    }

    const handleAddTaskClick = ()=>{
        handleTaskAddition(inputData);
        setInputData("");
    }

    return <>
    
    <div className="add-task-container">
        <input onChange={handleInputChange}
        value={inputData}type="text" className="add-task-input"></input>
        <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
    </div>
    </>
  
}
 
export default AddTask;