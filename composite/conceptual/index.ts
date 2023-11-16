import { Component } from "./Component";
import { Composite } from "./Composite";
import { Leaf } from "./Leaf";

function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`)
}

function clientCode2(component1: Component, component2: Component) {
  if (component1.isComposite()) {
    component1.add(component2);
  }

  console.log(`RESULT: ${component1.operation()}`)
}

const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log("");

const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());

const branch2 = new Composite();
branch2.add(new Leaf());

const tree = new Composite();
tree.add(branch1);
tree.add(branch2);

console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);

console.log('\nClient: I don\'t need to check the components classes even when managing the tree:');
clientCode2(tree, simple);

