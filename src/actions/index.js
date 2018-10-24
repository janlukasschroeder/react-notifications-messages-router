export const notify = notification => ({
  type: "SEND_NOTIFICATION",
  notification
});

export const sendMessage = message => ({
  type: "SEND_MESSAGE",
  message
});
