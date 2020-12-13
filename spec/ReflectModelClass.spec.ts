import 'reflect-metadata';
import { DataMapping, DataFieldBase } from '@themost/d/core';
import { Supplier } from './test/models/Supplier';
import { Product } from './test/models/Product';

const {model,primary, property, association} = DataMapping;

describe('ReflectModelClass', () => {

    it('should enumerate properties', () => {
        let dataModel = DataMapping.getDeclaredModel(Product);
        expect(dataModel).toBeTruthy();
        expect(dataModel.name).toBe('Product');

        let fields =  DataMapping.getDeclaredFields(Product);
        expect(fields).toBeTruthy();
        
        const field: DataFieldBase = fields.get('Supplier');
        expect(field).toBeTruthy();
        expect(field.mapping).toBeTruthy();
    });

});