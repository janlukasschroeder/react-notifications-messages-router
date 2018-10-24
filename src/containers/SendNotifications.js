import React from "react";
import { connect } from "react-redux";
import { notify } from "../actions";
import { Button } from "antd";

const SendNotification = props => {
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
          props.notify({
            message: state.message.value,
            description: state.description.value,
            type: state.type.value
          });

          state.message.value = "";
          state.description.value = "";
          state.type.value = "";
        }}
      >
        {/*<input ref={node => (input = node)} />*/}
        <input ref={node => (state.message = node)} placeholder="Message" />
        <input
          ref={node => (state.description = node)}
          placeholder="Description"
        />
        <input ref={node => (state.type = node)} placeholder="Type" />
        <button type="submit">Send Notification</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  notify: notification => dispatch(notify(notification))
});

export default connect(
  null,
  mapDispatchToProps
)(SendNotification);
