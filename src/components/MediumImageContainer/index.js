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

  getOverlayPosition(e) {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { x, y, height, width } = e.currentTarget.getBoundingClientRect();

    const xPos = (mouseX - x) * 100 / width;
    const yPos = (mouseY - y) * 100 / height;

    return {
      left: xPos + '%',
      top: yPos + '%'
    };
  }

  showOverlay = () => {
    if(!this.state.isOverLayHidden) return;
    this.setState({
      isOverLayHidden: false
    });
  }

  positionOverlay = (e) => {
    const overLayPosition = this.getOverlayPosition(e);
    this.setState({
      overLayPosition
    });
  }

  hideOverlay = () => {
    if(this.state.isOverLayHidden) return;
    this.setState({
      isOverLayHidden: true
    });
  }

  render() {
    const { isOverLayHidden, overLayPosition } = this.state;
    const { selectedImage } = this.props;
    const overlayClass = isOverLayHidden ? 'med-overlay hidden' : 'med-overlay';
    return (
      <div className="med-img-container" onMouseEnter={this.showOverlay} onMouseMove={this.positionOverlay} >
        <img className="med-img" src={`../../assets/med-img-${selectedImage}.jpeg`} onMouseOut={this.hideOverlay} />
        <div className={overlayClass} style={overLayPosition} />
      </div>
    );
  }
};

export default connect(mapStateToProps)(App);