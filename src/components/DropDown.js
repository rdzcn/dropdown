import React from 'react';
import Toggle from './Toggle';
import Body from './Body';

class DropDown extends React.Component {
  state = {
    isOpen: false,
    placeX: 0,  
    placeY: 0
  }
  toggleDropDown = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
  render() {
    const { title, iconName } = this.props;
    return (
      <div className="dd-wrapper">
        { this.state.isOpen ? <Body toggleDropDown={this.toggleDropDown}/> : <Toggle title={title} iconName={iconName} toggleDropDown={this.toggleDropDown}/> }
      </div>
    )
  }
}

export default DropDown;