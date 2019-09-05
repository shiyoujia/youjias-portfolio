import React from 'react';

class RainDrop extends React.Component {
  render() {
    return (
      <div className="rain-drop-wrapper">
        <svg viewBox="0 0 30 42">
          <path fill="transparent" stroke="#000" strokeWidth="1.0"
                d="M15 3
                    Q16.5 6.8 25 18
                    A12.8 12.8 0 1 1 5 18
                    Q13.5 6.8 15 3z" />
        </svg>
      </div>
     
    );
  }
}

export default RainDrop;