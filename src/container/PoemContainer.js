import React from 'react';
import PageTitle from '../components/PageTitle.js';
import ThemeSelector from '../components/ThemeSelector.js';
// import WordsList from '../components/WordsList.js';


class PoemContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      words: [],
      themes: ['love', 'nature', 'anger', 'war'],
      selectedTheme: null
    }
    this.handleThemeSelected = this.handleThemeSelected.bind(this);
    this.getWordsData = this.getWordsData.bind(this);
  }


getWordsData(selectedTheme) {
  const url = `https://api.datamuse.com/words?ml=${selectedTheme}`;
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


render(){
  return(
    <div className="poem-container">
      <PageTitle/>
      <ThemeSelector themes={this.state.themes} onThemeSelected={this.handleThemeSelected}/>
      {/* <WordsList words={this.state.words}/> */}
    </div>
  );

}

}


export default PoemContainer;
