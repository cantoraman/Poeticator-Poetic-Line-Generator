import React from 'react';

const UtilityLine = (props) => {

  function handleUtilityButton(evt){
    props.handleUtilityOrder(evt.target.value);
  }




    return (
      <div className = "utility-line">
        <button onClick={handleUtilityButton} value="return">New Line</button>
        <button onClick={handleUtilityButton} value="delete">Delete Word</button>
        <button onClick={handleUtilityButton} value="...">. . .</button>
        <button onClick={handleUtilityButton} value="!">!</button>
        <button onClick={handleUtilityButton} value="?">?</button>
        <button onClick={handleUtilityButton} value=".">.</button>
        <button onClick={handleUtilityButton} value="and">and</button>
        <button onClick={handleUtilityButton} value="or">or</button>
        <button onClick={handleUtilityButton} value="the">the</button>
        <button onClick={handleUtilityButton} value="any">any</button>
        <button onClick={handleUtilityButton} value="some">some</button>
      </div>
    )

}



export default UtilityLine;
