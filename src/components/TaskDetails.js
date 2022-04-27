import React from 'react';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Button from './Button'
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = ()=>{
        history.goBack()
    }
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent in vulputate augue. Praesent aliquet feugiat porttitor. 
                    Morbi convallis lacus mauris, vitae maximus dolor pellentesque non. 
                    Phasellus eleifend est id magna pellentesque, sed volutpat turpis dictum. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                    posuere cubilia curae; Praesent ut dui consequat, volutpat sem viverra, 
                    mattis nisi. Sed efficitur enim libero, vitae iaculis ligula varius 
                    vestibulum</p>
            </div>
        
        </>
    );
}
 
export default TaskDetails;