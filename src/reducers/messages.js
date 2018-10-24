const initialState = {
  messages: [],
  newMessage: {}
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        newMessage: action.message,
        messages: [...state.messages, action.message]
      };
    default:
      return state;
  }
};

export default messages;
