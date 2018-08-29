import React from 'react';
import Word from './Word.js';

const RhymingWordsList = (props) => {

  if(!props.rhymingWords) return null;

  const rhymingWordsComponents  = props.rhymingWords.map((word, index) => {

    return (
      <div >
        <Word word={word.word} handleClick={props.onWordClicked} key={index}/>
      </div>

    )
  })


  return(
    <div className="rhyming-words-list">
      <h3>Words that Rhymes with {props.selectedWord}</h3>
      {rhymingWordsComponents}
    </div>
  )
}


export default RhymingWordsList;
