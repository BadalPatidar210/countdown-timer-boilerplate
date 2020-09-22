import React from "react";

class CountdownForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorEnum: {
        isError: false,
        errorMessage: "",
      },
    };
  }
  resetForm() {
    this.refs.seconds.value = "";
  }
  onSubmit(e) {
    //This will give you string for seconds. Do not remove refs
    e.preventDefault();
    var secondsStr = this.refs.seconds.value;
    let time = parseInt(secondsStr);

    this.resetForm();
    if (isNaN(time) || time < 0) {
      this.setState({
        errorEnum: {
          isError: true,
          errorMsg: "Please enter a valid time.",
        },
      });
      return;
    }
    this.setState({
      errorEnum: {
        isError: false,
      },
    });
    this.props.onSetCountdownTime(time);
  }
  render() {
    return (
      <div>
        <form
          ref="form"
          onSubmit={this.onSubmit.bind(this)}
          className="countdown-form"
        >
          <input
            type="text"
            ref="seconds"
            placeholder="Enter time in seconds"
          />
          <input
            type="submit"
            disabled={this.props.count > 0}
            className="button success expanded"
            value="Start Countdown"
          />
        </form>
        {this.state.errorEnum.isError && (
          <p style={{ color: "red" }}>{this.state.errorEnum.errorMessage}</p>
        )}
      </div>
    );
  }
}

export default CountdownForm;
