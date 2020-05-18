import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOverlayPosition } from '../../actions';

import './styles.css';

const mapStateToProps = ({ selectedImage, overlay, largeImage }) => ({ selectedImage, overlay, largeImage });
const mapActionToProps = () => ({ setOverlayPosition });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverLayHidden: true
    };

    this.overLayRef = React.createRef();
  }

  getOverlayPosition = (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { x, y, height, width } = e.currentTarget.getBoundingClientRect();

    const overlayWidth = this.overLayRef.current.offsetWidth;
    const overlayHeight = this.overLayRef.current.offsetHeight;

    let xPos = (mouseX - x);
    let yPos = (mouseY - y - height);
    let yPosAbs = (mouseY - y);

    if(xPos < overlayWidth/2) xPos = overlayWidth/2;
    if(xPos > width - overlayWidth/2) xPos = width - overlayWidth/2;

    if(yPos > -overlayHeight/2) yPos = -overlayHeight/2;
    if(yPos < overlayHeight/2 - height) yPos = overlayHeight/2 - height;

    if(yPosAbs < overlayHeight/2) yPosAbs = overlayHeight/2;
    if(yPosAbs > height - overlayHeight/2) yPosAbs = height - overlayHeight/2;

    const xPer = (xPos - overlayWidth/2) * 100 / (width - overlayWidth);
    const yPer = (yPosAbs - overlayHeight/2) * 100 / (height - overlayHeight);

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

  getOverlayHeight(largeImage) {
    return (largeImage.height*200/largeImage.width) + 'px';
  }

  render() {
    const { isOverLayHidden } = this.state;
    const { selectedImage, overlay: { x = 0, y = 0 } = {}, largeImage } = this.props;

    const overlayClass = isOverLayHidden ? 'med-overlay hidden' : 'med-overlay';
    const overlayHeight = this.getOverlayHeight(largeImage);
    const overLayStyle = {
      height: overlayHeight,
      transform: `translate(-50%, -50%) translate(${x}, ${y})`
    }
    return (
      <div className="med-img-container" onMouseEnter={this.showOverlay} onMouseMove={this.positionOverlay} >
        <img className="med-img" src={require(`../../../assets/med-img-${selectedImage}.jpeg`)} alt="Medium" onMouseOut={this.hideOverlay} />
        <div ref={this.overLayRef} className={overlayClass} style={overLayStyle} />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapActionToProps())(App);