import {DataMapping} from '@themost/d/core';
@DataMapping.model()
export class Supplier {
    
    @DataMapping.property()
    public SupplierID?: number;

    @DataMapping.property()
    public SupplierName?: string;
    
    @DataMapping.property()
    public ContactName?: string;

    @DataMapping.property()
    public Address?: string;

    @DataMapping.property()
    public City?: string;

    @DataMapping.property()
    public PostalCode?: string;

    @DataMapping.property()
    public Country?: number;

    @DataMapping.property()
    public Phone?: number;

}