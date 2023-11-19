import { Product } from "./Product";

export abstract class CoffeeTable extends Product {
  width?: number; 
  height?: number; 
  length?: number;
}