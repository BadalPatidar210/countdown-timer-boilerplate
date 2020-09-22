import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.formatTime = this.formatTime.bind(this);
  }
  formatTime(timeInSeconds) {
    var seconds = timeInSeconds % 60;
    var minutes = Math.floor(timeInSeconds / 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

  render() {
    var { timeInSeconds } = this.props;
    //Keep the classes name. Try to inject your code and do not remove existing code
    return (
      <div className="clock">
        <span className="clock-text">{this.formatTime(timeInSeconds)}</span>
      </div>
    );
  }
}

export default Clock;
