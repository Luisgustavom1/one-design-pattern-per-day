import { RoundHole } from "./RounHole";
import { RoundPeg } from "./RoundPeg";
import { SquarePeg } from "./SquarePeg";
import { SquarePegAdapter } from "./SquarePegAdapter";

const roundHole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
roundHole.fits(roundPeg);

const smallPeg = new SquarePeg(5);
const largePeg = new SquarePeg(10);
// This not compile
// roundHole.fits(smallPeg);

const smallPegAdapter = new SquarePegAdapter(smallPeg);
const largePegAdapter = new SquarePegAdapter(largePeg);

console.log(roundHole.fits(smallPegAdapter));
console.log(roundHole.fits(largePegAdapter));
