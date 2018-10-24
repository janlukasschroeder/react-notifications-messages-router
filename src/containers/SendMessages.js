import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../actions";

const SendMessages = props => {
  let input;
  const state = {
    message: "",
    description: "",
    type: ""
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!state.message.value.trim()) {
            return;
          }
          // dispatch(notify(input.value));
          // props.notify({ message: input.value, status: 403 });
          props.sendMessage({
            message: state.message.value,
            type: state.type.value
          });

          state.message.value = "";
          state.type.value = "";
        }}
      >
        {/*<input ref={node => (input = node)} />*/}
        <input ref={node => (state.message = node)} placeholder="Message" />
        <input ref={node => (state.type = node)} placeholder="Type" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message))
});

export default connect(
  null,
  mapDispatchToProps
)(SendMessages);
