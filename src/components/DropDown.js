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
    this.setState({
      isOpen: !this.state.isOpen,
      opensToTop: togglePosY > windowHeight / 2
    })
  }
  render() {
    const { title, iconName } = this.props;
    const { opensToTop, isOpen } = this.state;
    return (
      <div className="dd-wrapper">
        { isOpen ? <Body toggleDropDown={this.toggleDropDown} opensToTop={opensToTop} /> : <Toggle title={title} iconName={iconName} toggleDropDown={this.toggleDropDown}/> }
      </div>
    )
  }
}

export default DropDown;