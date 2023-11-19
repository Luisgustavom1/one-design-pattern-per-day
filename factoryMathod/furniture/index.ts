import { Client } from "./Client";
import { RetroFurnitureFactory } from "./factories/RetroFurnitureFactory";

const client = new Client();

client.produceFurniture(new RetroFurnitureFactory())
