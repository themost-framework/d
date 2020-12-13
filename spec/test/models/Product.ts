import {DataMapping} from '@themost/d/core';
import { Supplier } from './Supplier';
const {model, property, association, primary} = DataMapping;

@model()
export class Product {
    
    @primary()
    public ProductID?: number;

    @property()
    public ProductName: number;
    
    @property()
    @association()
    public Supplier: Supplier | number;

    @property()
    public Category: string;

    @property()
    public Unit: string;

    @property()
    public Price: number;
}