import React from 'react';
import Word from './Word.js';

const RhymingWordsList = (props) => {

  if(!props.rhymingWords) return (
    <div className="rhyming-words-list">
      <h3>Words that rhymes</h3>
    </div>
  );

  const rhymingWordsComponents  = props.rhymingWords.map((word, index) => {

    return (
      <div >
        <Word
          word={word.word}
          handleRhyme={props.onRhymeOrder}
          handleWrite={props.onWriteOrder}
          handleCouple={props.onCoupleOrder}
          key={index}/>
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
