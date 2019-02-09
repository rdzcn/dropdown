import React from 'react';
import Toggle from './Toggle';
import Body from './Body';

class DropDown extends React.Component {
  state = {
    isOpen: false,
    placeX: 0,  
    placeY: 0
  }
  toggleDropDownBody = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
  render() {
    return (
      <div className="dd-wrapper">
        <Toggle toggleDropDownBody={this.toggleDropDownBody} />
        { this.state.isOpen ? <Body /> : null }
      </div>
    )
  }
}

export default DropDown;