import React from 'react';


const PoemLine = function (props) {
  console.log(props.poem);
  if(!props.poem) return (
  <h3 className="poem-line"> It begins...</h3>);
  return (
    <p className="poem-line">{props.poem}</p>
  )
};

export default PoemLine;
