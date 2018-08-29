import React from 'react';


const PoemLine = function (props) {
  if(!props.poem) return (
  <h3 className="poem-line"> It begins...</h3>);
  return (
    <h3 className="poem-line">{props.poem}</h3>
  )
};

export default PoemLine;
