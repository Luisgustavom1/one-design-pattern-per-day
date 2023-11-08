import { Navigator } from "./Navigator";
import { RoadStrategy } from "./Road.strategy";
import { WalkingStrategy } from "./Walking.strategy";

const navigator = new Navigator()

const roadStrategy = new RoadStrategy()
const walkingStrategy = new WalkingStrategy()

const navigate = () => navigator.navigate({
  lat: Math.random() * 10,
  long: Math.random() * 10
}, {
  lat: Math.random() * 10,
  long: Math.random() * 10
})


navigator.setStrategy(walkingStrategy)
navigate()

navigator.setStrategy(roadStrategy)
navigate()
