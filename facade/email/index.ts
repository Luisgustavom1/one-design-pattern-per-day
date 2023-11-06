import { SwiftMailer } from "./SwiftMailer";
import { TemplatedTwigMailer } from "./TemplatedTwigMailer";
import { TwigTemplate } from "./TwigTemplate";

const swiftMailer = new SwiftMailer()
const twigTemplate = new TwigTemplate()
const templatedTwigMailer = new TemplatedTwigMailer(swiftMailer, twigTemplate)

templatedTwigMailer.send("email@gmail.com", "Title", "standard")