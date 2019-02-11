import React from 'react';
import Card from './Card' ;

class App extends React.Component {
  render() {
    /* const options = {
      title: "",
      iconName: "down-arrow",
      hasList: false,
      hasText: true
    } */
    return (
      <div className="app-container" >
        <Card />
      </div>
    )
  }
}

export default App;