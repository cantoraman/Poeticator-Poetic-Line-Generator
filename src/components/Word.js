import React from 'react';

const Word = function (props) {

function handleClick(){
  props.handleClick(props.word);
}
  if(!props) return null;
  return (
    <div onClick={handleClick}
       className='word'>
      <p>{props.word}</p>
    </div>
  )
}

export default Word;
