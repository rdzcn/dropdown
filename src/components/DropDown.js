import React from 'react';
import Toggle from './Toggle';
import Body from './Body';

class DropDown extends React.Component {
  state = {
    isOpen: false,
    opensToTop: false
  }
  toggleDropDown = (event) => {
    const togglePosY = event.clientY;
    const windowHeight = window.innerHeight;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      opensToTop: togglePosY > windowHeight / 2
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