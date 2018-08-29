import React from 'react';
import WritingWord from './WritingWord.js';

const CoupledWordsList = (props) => {

  if(!props.couplingWords) return (
    <div className="coupled-words-list">
      <h3>Words Couples</h3>
    </div>
  );

  const coupledWordsComponents  = props.couplingWords.map((word, index) => {

    return (
      <div >
        <WritingWord firstWord={word.word} secondWord={props.rhymingWord} handleClick={props.onWordClicked} key={index}/>
      </div>

    )
  })

  return(
    <div className="coupled-words-list">
      <h3>Words that Couples with {props.rhymingWord}</h3>
      {coupledWordsComponents}
    </div>
  )
}


export default CoupledWordsList;
