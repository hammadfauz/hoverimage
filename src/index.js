import React from 'react';

class HoverImage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hovered : false
    };
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }
  hoverOn () {
    this.setState({hovered : true});
  }
  hoverOff () {
    this.setState({hovered : false});
  }
  render () {
    var styles = {
      main : {
        'maxWidth' : this.props.width+'px',
        'overflow' : 'hidden'
      },
      img : {
        'maxWidth' : '100%',
        'transform' : this.state.hovered?'scale(1.1)':'scale(1)',
        'transition' : 'all linear 300ms'
      }
    };
    return (<div style={styles.main}
        onMouseLeave={this.hoverOff}
        onMouseEnter={this.hoverOn}>
      <img src={this.props.url} style={styles.img}/>
    </div>);
  }
};

module.exports = HoverImage;
