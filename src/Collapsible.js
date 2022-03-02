import React, { useState } from "react";
import btnExpandir from './hardware2bar.png';
import gatlingLogo from './gatlingBackgroundTransparente.png';
import './App.css';

function Collapsible(props) {

    return (
        <button type="submit" className="btnExpandFormat" onClick={() => props.onClick()}>
            <div>
                <br />
                <strong>DATA:</strong> {props.date}
                <br /><strong>VERSÃO DO APP:</strong> {props.version} <br />
                <strong>PLATAFORMA:</strong> {props.platform} <br />
            </div>
        </button>
)
}

export default Collapsible;
