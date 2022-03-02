import React, { useState } from "react";
import './App.css';

function CollapsibleCenarios(props) {
    const [isOpen, setIsOpen] = useState(true);

    return <div classname="collapsible">
        <button type="submit" className="btnExpandFormatCenarios" onClick={() => setIsOpen(!isOpen)}>
            {props.description}
        </button>
        
        
            <div className={isOpen ? 'openCenarios' : 'content'}>{props.children}</div>
        
        
        
    </div>
}

export default CollapsibleCenarios;
