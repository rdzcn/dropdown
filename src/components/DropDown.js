import React from 'react';
import Toggle from './Toggle';
import Body from './Body';
import { Route } from 'react-router-dom';

let componentTypes = [Toggle];

class DropDown extends React.Component {
  state = {
    open: 1,
    placeX: 0,  
    placeY: 0
  }
  toggleDropDownBody = () => {
    componentTypes.length === 1 ? componentTypes.push(Body) : componentTypes.pop();
    this.setState({ open: componentTypes.length });
  }

  render() {
    return (
      <div className="dd-wrapper">
        <Toggle toggleDropDownBody={this.toggleDropDownBody} title="Mehr" />
        { this.state.open === 2 ? <Body /> : null }
      </div>
    )
  }
}
export default DropDown;