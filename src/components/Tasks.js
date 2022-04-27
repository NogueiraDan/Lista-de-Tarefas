import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
    return(
        <>
            {tasks.map(task => 
                (<Task key={task.id}task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>)
            )} 
            {/* Mapeando cada task dinamicamente */}
        </>
    )
};


export default Tasks;