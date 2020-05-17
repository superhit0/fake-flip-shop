import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

const mapStateToProps = ({ selectedImage }) => ({ selectedImage });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverLayHidden: true,
      overLayStyle: {
        transform: 'translate(-50%, -50%)'
      }
    };
  }

  getOverlayPosition(e) {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { x, y, height } = e.currentTarget.getBoundingClientRect();

    const xPos = (mouseX - x);
    const yPos = (mouseY - y - height);

    return {
      x: xPos + 'px',
      y: yPos + 'px'
    };
  }

  getOverLayStyle(e) {
    const { x, y } = this.getOverlayPosition(e);
    return {
      transform: `translate(-50%, -50%) translate(${x}, ${y})`
    }
  }

  showOverlay = () => {
    if(!this.state.isOverLayHidden) return;
    this.setState({
      isOverLayHidden: false
    });
  }

  positionOverlay = (e) => {
    const overLayStyle = this.getOverLayStyle(e);
    this.setState({
      overLayStyle
    });
  }

  hideOverlay = () => {
    if(this.state.isOverLayHidden) return;
    this.setState({
      isOverLayHidden: true
    });
  }

  render() {
    const { isOverLayHidden, overLayStyle } = this.state;
    const { selectedImage } = this.props;
    const overlayClass = isOverLayHidden ? 'med-overlay hidden' : 'med-overlay';
    return (
      <div className="med-img-container" onMouseEnter={this.showOverlay} onMouseMove={this.positionOverlay} >
        <img className="med-img" src={`../../assets/med-img-${selectedImage}.jpeg`} onMouseOut={this.hideOverlay} />
        <div className={overlayClass} style={overLayStyle} />
      </div>
    );
  }
};

export default connect(mapStateToProps)(App);