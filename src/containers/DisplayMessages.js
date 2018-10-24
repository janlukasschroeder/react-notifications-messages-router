import React from "react";
import { connect } from "react-redux";
import { message as showMessage } from "antd";

class DisplayMessages extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.newMessage !== prevProps.newMessage) {
      this.displayMessage(this.props.newMessage);
    }
  }

  displayMessage({ message, type }) {
    showMessage[type || "info"](message);
  }

  render() {
    return "";
  }
}

const mapStateToProps = state => ({
  newMessage: state.messages.newMessage
});

export default connect(
  mapStateToProps,
  null
)(DisplayMessages);
