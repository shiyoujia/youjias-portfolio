import React from 'react';
import { Link } from 'react-router-dom';

class RainDrop extends React.Component {
  constructor() {
    super();
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
      redirect: false
    };
  }

  renderRedirect() {
    if (this.state.redirect && this.props.redirectLink) {
      return  (<Link path='/' component={() => { 
        window.location.href = this.props.redirectLink;
      }}/>)
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
      return {
        isHovering: !state.isHovering,
      };
    }

  render() {
    
    const style = !this.state.isHovering ? {display: 'none'}: {};
    return (
      <div className="rain-drop-wrapper">
        {this.renderRedirect()}
        <svg viewBox="0 0 30 42"  onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <path fill="transparent" stroke="#000" strokeWidth="1.0"
                d="M15 3
                    Q16.5 6.8 25 18
                    A12.8 12.8 0 1 1 5 18
                    Q13.5 6.8 15 3z" />
        </svg>
        <div style={style} className="hidden-content" onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}>
          <img src={this.props.photo} alt="previews" onClick={this.setRedirect}/>
        </div>
      </div>
     
    );
  }
}

export default RainDrop;