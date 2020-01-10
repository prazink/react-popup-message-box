import React from 'react';
import './App.css';

import Header from './components/Header';
import PopupBox from './components/PopupBox';

class App extends React.Component {
  state = {
    showPopupBox: false
  };

  // Show Popup on click
  showPopupBox = e => {
    this.setState({ showPopupBox: true });
  };

  // Close Popup on click
  closePopupBox = e => {
    this.setState({ showPopupBox: false });
  };

  render() {
    return (
      <div className='modal'>
        <Header />
        <button className='modal-open-button' onClick={this.showPopupBox}>
          Click me to Popup
        </button>
        <PopupBox
          showPopupBox={this.state.showPopupBox}
          closePopupBox={this.closePopupBox}
        />
      </div>
    );
  }
}

export default App;
