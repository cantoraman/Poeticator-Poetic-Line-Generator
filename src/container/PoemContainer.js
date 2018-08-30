import React from 'react';
import PageTitle from '../components/PageTitle.js';
import ThemeSelector from '../components/ThemeSelector.js';
import WordsList from '../components/WordsList.js';
import RhymingWordsList from '../components/RhymingWordsList.js'
import CoupledWordsList from '../components/CoupledWordsList.js'
import PoemLine from '../components/PoemLine.js'
import UtilityLine from '../components/UtilityLine.js'


class PoemContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      words: [],
      themes: ['love', 'nature', 'anger', 'war'],
      selectedWord: null,
      rhymingWord: null,
      selectedTheme: null,
      rhymingWords: null,
      couplingWords: null,
      poem: null
    }
    this.handleRhymeOrder = this.handleRhymeOrder.bind(this);
    this.handleWriteOrder = this.handleWriteOrder.bind(this);
    this.handleCoupleOrder = this.handleCoupleOrder.bind(this);

    this.handleUtilityOrder = this.handleUtilityOrder.bind(this);

    this.handleThemeSelected = this.handleThemeSelected.bind(this);
    this.getWordsData = this.getWordsData.bind(this);

  }

getWordsData(selectedTheme) {
  const url = `https://api.datamuse.com/words?ml=${selectedTheme}&max=25`;
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((words) => {
    this.setState({words: words})
  })
}

handleThemeSelected(selection){
  const selectedTheme = selection;
  this.setState({selectedTheme: selectedTheme});
  this.getWordsData(selectedTheme);
}


handleRhymeOrder(word){
  const wordx = word
  this.setState({selectedWord: wordx});
  const url = `https://api.datamuse.com/words?&rel_rhy=${word}&max=25`;
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((words) => {
    this.setState({rhymingWords: words})
  })
}

handleWriteOrder(word){
  if (this.state.poem!=null){
    const poem = this.state.poem+" "+word;
    this.setState({poem: poem})
  }
  else{
    this.setState({poem: word});
  }
}

handleUtilityOrder(sign){
  if (this.state.poem!=null){
    var poem = this.state.poem;
    switch(sign) {
      case "return":
          poem = poem + '\n';
          break;
      case "clear":
          poem = "";
          break;
      case "delete":
          var lastIndex = poem.lastIndexOf(" ");
          poem = poem.substring(0, lastIndex);
          break;
      default:
        poem = poem +" "+sign;
    }
    this.setState({poem: poem});
  }
}


/* <button onClick={handleUtilityButton} value="return">New Line</button>
<button onClick={handleUtilityButton} value="delete">Delete Word</button>
<button onClick={handleUtilityButton} value="...">. . .</button>
<button onClick={handleUtilityButton} value="!">!</button>
<button onClick={handleUtilityButton} value="?">?</button>
<button onClick={handleUtilityButton} value=".">.</button>
<button onClick={handleUtilityButton} value="and">and</button>
<button onClick={handleUtilityButton} value="or">or</button>
<button onClick={handleUtilityButton} value="the">the</button>
<button onClick={handleUtilityButton} value="any">any</button>
<button onClick={handleUtilityButton} value="some">some</button> */

handleCoupleOrder(word){
  this.setState({rhymingWord: word});
  const url = `https://api.datamuse.com/words?rel_bgb=${word}&max=25`;
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((words) => {
    this.setState({couplingWords: words})
  })
}


render(){
  return(
    <div className="poem-container">
      <PageTitle/>
      <ThemeSelector themes={this.state.themes} onThemeSelected={this.handleThemeSelected}/>
      <UtilityLine handleUtilityOrder={this.handleUtilityOrder}/>
      <WordsList
        words={this.state.words}
        onRhymeOrder={this.handleRhymeOrder}
        onWriteOrder={this.handleWriteOrder}
        onCoupleOrder={this.handleCoupleOrder}
      />
      <RhymingWordsList
        rhymingWords={this.state.rhymingWords}
        selectedWord={this.state.selectedWord}
        onRhymeOrder={this.handleRhymeOrder}
        onWriteOrder={this.handleWriteOrder}
        onCoupleOrder={this.handleCoupleOrder}
      />
      <CoupledWordsList
        couplingWords={this.state.couplingWords}
        rhymingWord={this.state.rhymingWord}
        onWordClicked={this.handleWriteOrder}/>
      <PoemLine
        poem={this.state.poem}
      />
    </div>
  );

  }

}

export default PoemContainer;
