import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLargeImageProps } from '../../actions';

import './styles.css';

const mapStateToProps = ({ selectedImage, overlay }) => ({ selectedImage, overlay });
const mapActionToProps = () => ({ setLargeImageProps });

class App extends Component {
  constructor(props) {
    super(props);

    this.largeImgContainerRef = React.createRef();
  }

  componentDidMount() {
    const { offsetHeight, offsetWidth } = this.largeImgContainerRef.current;
    this.props.setLargeImageProps({
      width: offsetWidth,
      height: offsetHeight
    });
  }

  componentDidUpdate() {
    const { offsetHeight, offsetWidth } = this.largeImgContainerRef.current;
    this.props.setLargeImageProps({
      width: offsetWidth,
      height: offsetHeight
    });
  }

  render() {
    const { selectedImage, overlay } = this.props;
    const imagePosition = {
      objectPosition: `${overlay.xPer} ${overlay.yPer}`
    };

    return (
      <div className="large-img-container" ref={this.largeImgContainerRef}>
        <img className="large-img" src={require(`../../../assets/large-img-${selectedImage}.jpeg`)} alt="Large" style={imagePosition}/>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapActionToProps())(App);