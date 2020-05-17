import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOverlayPosition } from '../../actions/overlay';

import './styles.css';

const mapStateToProps = ({ selectedImage, overlay }) => ({ selectedImage, overlay });
const mapActionToProps = () => ({ setOverlayPosition });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverLayHidden: true
    };
  }

  getOverlayPosition(e) {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { x, y, height, width } = e.currentTarget.getBoundingClientRect();

    const xPos = (mouseX - x);
    const yPos = (mouseY - y - height);

    const xPer = xPos * 100 / width;
    const yPer = (mouseY - y) * 100 / height;

    return {
      x: xPos + 'px',
      y: yPos + 'px',
      xPer: xPer + '%',
      yPer: yPer + '%'
    };
  }

  showOverlay = () => {
    if(!this.state.isOverLayHidden) return;
    this.setState({
      isOverLayHidden: false
    });
  }

  positionOverlay = (e) => {
    const overlayPosition = this.getOverlayPosition(e);

    this.props.setOverlayPosition(overlayPosition);
  }

  hideOverlay = () => {
    if(this.state.isOverLayHidden) return;
    this.setState({
      isOverLayHidden: true
    });
  }

  render() {
    const { isOverLayHidden } = this.state;
    const { selectedImage, overlay: { x = 0, y = 0 } = {} } = this.props;

    const overlayClass = isOverLayHidden ? 'med-overlay hidden' : 'med-overlay';
    const overLayStyle = {
      transform: `translate(-50%, -50%) translate(${x}, ${y})`
    }
    return (
      <div className="med-img-container" onMouseEnter={this.showOverlay} onMouseMove={this.positionOverlay} >
        <img className="med-img" src={`../../assets/med-img-${selectedImage}.jpeg`} onMouseOut={this.hideOverlay} />
        <div className={overlayClass} style={overLayStyle} />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapActionToProps())(App);