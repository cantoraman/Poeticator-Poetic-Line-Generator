import React from 'react';
import Word from './Word.js';

const WordsList = function (props) {

  const wordsComponents  = props.words.map((word, index) => {

    return (
      <div>
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
    <div className="words-list">
      <h3>Word Choices</h3>
      {wordsComponents}
    </div>
  )
}
export default WordsList;
