import React from 'react';
import Word from './Word.js';

const WordsList = function (props) {
  console.log(props);

  const wordsComponents  = props.words.map((word, index) => {

    return (
      <div>
        <Word word={word.word} handleClick={props.onWordClicked} key={index}/>
      </div>

    )
  })


  return(
    <div>
      <h3>Word Choices</h3>
      {wordsComponents}
    </div>
  )
}
export default WordsList;
