import { Product } from "./Product";

export abstract class Sofa extends Product {
  width?: number; 
  height?: number; 
  depth?: number;
}