import React from 'react';

const WritingWord = function (props) {

function handleClick(){
  props.handleClick(coupledWord);
}
  if(!props) return null;
  const coupledWord = props.firstWord+" "+ props.secondWord;
  return (
    <button onClick={handleClick}
       className='writing-word'>
      {coupledWord}
    </button>
  )
}

export default WritingWord;
