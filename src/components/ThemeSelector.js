import React from 'react';

const ThemeSelector = (props) => {

  function handleChange(evt){
    props.onThemeSelected(evt.target.value);
  }


  const options = props.themes.map((theme, index) => {
    return <option value={theme} key={index}>{theme}</option>
  })


    return (
      <select
        className = "theme-selector"
        defaultValue="default"
        onChange={handleChange}
      >
      <option disabled value="selected">Select a theme...</option>
      {options}
      </select>
    )

}



export default ThemeSelector;
