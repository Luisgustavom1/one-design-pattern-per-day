import { TransportableFightingUnit } from "./AbstractTransportableFightingUnit";
import { HeadQuarters } from "./HeadQuarters";
import { TransportShip } from "./TransportShip";

const hq = new HeadQuarters()

const unit1 = new TransportableFightingUnit(hq)
const unit2 = new TransportableFightingUnit(hq)
const ship = new TransportShip(hq)

ship.arrive()
ship.startEmbarkation();
ship.depart();
ship.travel();
ship.arrive();
ship.startDisembarkation();