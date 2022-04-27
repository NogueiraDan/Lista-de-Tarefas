import React from 'react';
import "./Button.css"


const Button = ({children, onClick}) => {
    return ( 
        <button onClick={onClick} className="button">  
            {children}
             {/*Tudo que está dentro do Component, é seu children  */}
        </button>       
     );
};
export default Button;