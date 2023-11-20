import { EmailNotification } from "./notification/EmailNotification";
import { SlackNotification } from "./notification/SlackNotification";
import { Notification } from "./notification/contracts/Notification";
import { SlackApi } from "./services/SlackApi";

function clientCode(notification: Notification) {
  notification.send(
    "Website is down!",
    "<strong style='color:red;font-size: 50px;'>Alert!</strong>. Our website is not responding. Call admins and bring it up!"
  )
}

console.log("Client code is designed correctly and works with email notifications:\n");
const emailNotification = new EmailNotification("noreply@company.com");
clientCode(emailNotification);

console.log("The same client code can work with other classes via adapter:\n");
const slackApi = new SlackApi("example.com", "*******");
const slackNotification = new SlackNotification(slackApi, "General chat");
// It doesn't working
// clientCode(slackApi)

// but with SlackNotification Adapter it works
clientCode(slackNotification)