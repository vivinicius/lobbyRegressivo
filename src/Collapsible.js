import React, { useState } from "react";
import './App.css';

function Collapsible(props) {
    const selectedClass = {
        "iOS" : "platformiOS" ,
        "Android" : "platformAndroid" , 
        "Web" : "platformWeb"
    }

    const btnType = {
        "iOS" : "btnExpandFormatiOS" ,
        "Android" : "btnExpandFormatAndroid" , 
        "Web" : "btnExpandFormatWeb"
    }

    const topbarType = {
        "iOS" : "topbariOS" ,
        "Android" : "topbarAndroid" , 
        "Web" : "topbarWeb"
    }

    return (
        <>
        <div class={topbarType[props.platform]}>
              <br />
            </div>

            <button type="submit" className={btnType[props.platform]} onClick={() => props.onClick()}>

            <div>
                <br />
                <strong>DATA:</strong> {props.date}
                <br /><strong>VERSÃO DO APP:</strong> {props.version} <br />
                <strong>PLATAFORMA: </strong>
                <div class={selectedClass[props.platform]}>
                {props.platform}
                </div>
            </div>
        </button>
        </>
        
)
}

export default Collapsible;
