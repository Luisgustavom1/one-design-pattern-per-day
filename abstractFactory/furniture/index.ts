import { Client } from "./Client";
import { ClassicFurnitureFactory } from "./factories/ClassicFurnitureFactory";
import { RetroFurnitureFactory } from "./factories/RetroFurnitureFactory";

const client = new Client();

client.produceFurniture(new RetroFurnitureFactory())
console.log("\n\n\n");
client.produceFurniture(new ClassicFurnitureFactory())
