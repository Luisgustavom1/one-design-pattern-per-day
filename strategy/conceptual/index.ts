import { Context } from "./Context";
import { Reverse } from "./Reverse";
import { Sort } from "./Sort";

const sort = new Sort()
const reverse = new Reverse()

const context = new Context(sort)
context.do()

context.setStrategy(reverse)
context.do()