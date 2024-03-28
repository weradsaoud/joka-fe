import { notification } from "antd";

export type NotificationType = "success" | "info" | "warning" | "error";
export const openNotificationWithIcon = (
  type: NotificationType,
  title: string,
  message: string
) => {
  notification[type]({
    message: title,
    description: message,
  });
};