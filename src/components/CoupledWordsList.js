import React from 'react';
import WritingWord from './WritingWord.js';

const CoupledWordsList = (props) => {

  if(!props.coupledWords) return null;

  const coupledWordsComponents  = props.coupledWords.map((word, index) => {

    return (
      <div >
        <WritingWord firstWord={word.word} secondWord={props.selectedWord} handleClick={props.onWordClicked} key={index}/>
      </div>

    )
  })

  return(
    <div className="coupled-words-list">
      <h3>Words that Couples with {props.selectedWord}</h3>
      {coupledWordsComponents}
    </div>
  )
}


export default CoupledWordsList;
