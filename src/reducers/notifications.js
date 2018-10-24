const initialState = {
  notifications: [],
  newNotification: {}
};

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_NOTIFICATION":
      return {
        ...state,
        newNotification: action.notification,
        notifications: [...state.notifications, action.notification]
      };
    default:
      return state;
  }
};

export default notifications;
