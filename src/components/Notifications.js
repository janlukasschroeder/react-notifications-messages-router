import React from "react";

const Notifications = ({ newNotification, notifications }) => (
  <div>
    New Notification: {JSON.stringify(newNotification)}
    <ul>
      {notifications.map((notification, i) => (
        <li key={i}>{JSON.stringify(notification)}</li>
      ))}
    </ul>
  </div>
);

export default Notifications;
