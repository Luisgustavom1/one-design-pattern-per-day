import { Product } from "./Product";

export abstract class Armchair extends Product {
  width?: number; 
  height?: number; 
  depth?: number;
}