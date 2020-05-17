import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

const mapStateToProps = ({ selectedImage }) => ({ selectedImage });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverLayHidden: true,
      overLayPosition: {
        left: '50%',
        top: '50%'
      }
    };
  }

  showOverlay = (e) => {
    console.log(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
    this.setState({
      isOverLayHidden: false
    })
  }

  hideOverlay = () => {
    this.setState({
      isOverLayHidden: true
    })
  }

  render() {
    const { isOverLayHidden, overLayPosition } = this.state;
    const { selectedImage } = this.props;
    const overlayClass = isOverLayHidden ? 'med-overlay hidden' : 'med-overlay';
    return (
      <div className="med-img-container" onMouseOver={this.showOverlay} onMouseOut={this.hideOverlay}>
        <img className="med-img" src={`../../assets/med-img-${selectedImage}.jpeg`} />
        <div className={overlayClass} style={overLayPosition}></div>
      </div>
    );
  }
};

export default connect(mapStateToProps)(App);