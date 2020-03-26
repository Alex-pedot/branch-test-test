import React from "react";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

class App extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <SlideDown className={'my-dropdown-slidedown'}>
        <div>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>
      </SlideDown>
    )
  }
}

export default App;
