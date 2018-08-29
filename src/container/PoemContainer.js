import React from 'react';
import PageTitle from '../components/PageTitle.js';
import ThemeSelector from '../components/ThemeSelector.js';
import WordsList from '../components/WordsList.js';
import RhymingWordsList from '../components/RhymingWordsList.js'
import CoupledWordsList from '../components/CoupledWordsList.js'
import PoemLine from '../components/PoemLine.js'


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
      coupledWords: null,
      poem: null
    }
    this.handleThemeSelected = this.handleThemeSelected.bind(this);
    this.getWordsData = this.getWordsData.bind(this);
    this.handleWordClicked = this.handleWordClicked.bind(this);
    this.handleRhymingWordClicked = this.handleRhymingWordClicked.bind(this);
    this.handleWritingWordClicked = this.handleWritingWordClicked.bind(this);

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

handleWordClicked(word){
  this.setState({selectedWord: word});
  const url = `https://api.datamuse.com/words?&rel_rhy=${word}&max=25`;
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((words) => {
    this.setState({rhymingWords: words})
  })
}

handleRhymingWordClicked(word){
  // this.setState({rhymingWord: word});
  const url = `https://api.datamuse.com/words?rel_bgb=${word}&max=25`;
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((words) => {
    this.setState({coupledWords: words})
  })
}

handleWritingWordClicked(word){
  // this.setState({selectedWord: word});
    const poem = this.state.poem+" "+word;
  // const url = `https://api.datamuse.com/words?rel_bgb=${word}&max=25`;
  // fetch(url)
  // .then((res) => {
  //   return res.json();
  // })
  // .then((words) => {
    this.setState({poem: poem})
//  })
}

render(){
  return(
    <div className="poem-container">
      <PageTitle/>
      <ThemeSelector themes={this.state.themes} onThemeSelected={this.handleThemeSelected}/>
      <WordsList words={this.state.words} onWordClicked={this.handleWordClicked} />
      <RhymingWordsList
        rhymingWords={this.state.rhymingWords}
        selectedWord={this.state.selectedWord}
        onWordClicked={this.handleRhymingWordClicked} />
      <CoupledWordsList
        coupledWords={this.state.coupledWords}
        selectedWord={this.state.selectedWord}
        onWordClicked={this.handleWritingWordClicked}/>
      <PoemLine
        poem={this.state.poem}
      />
    </div>
  );

}

}


export default PoemContainer;
