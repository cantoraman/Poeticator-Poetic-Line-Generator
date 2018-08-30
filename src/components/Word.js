import React from 'react';

const Word = function (props) {

function handleRhymeButton(){
  console.log(props.word);
  props.handleRhyme(props.word);
}

function handleWriteButton(){
  props.handleWrite(props.word);
}
function handleCoupleButton(){
  props.handleCouple(props.word);
}


  if(!props) return null;
  return (
    <div
       className='word'>
      <p>{props.word}</p>
      <button onClick={handleWriteButton}>Write</button>
      <button onClick={handleRhymeButton}>Rhyme</button>
      <button onClick={handleCoupleButton}>Couple</button>
    </div>
  )
}

export default Word;
