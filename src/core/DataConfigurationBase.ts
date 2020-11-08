// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

interface DataTypePropertiesConfiguration {
    pattern?: string;
    patternMessage?: string;
    minValue?: any;
    maxValue?: any;

}

interface DataTypeConfiguration {
    comment?: string;
    properties?: DataTypePropertiesConfiguration;
    label?: string;
    url?: string;
    type?: string;
    sqltype?: string;
    instances?: any;
    supertypes?: string[];
    version?: string;
}

interface DataAdapterConfiguration {
    name: string;
    invariantName: string;
    default?: boolean;
    options: any;
}

interface DataAdapterTypeConfiguration {
    name: string;
    invariantName: string;
    type: string;
}

interface DataTypeIndexer {
    [k: string]: DataTypeConfiguration;
}

interface DataConfigurationBase {
    readonly adapters: DataAdapterConfiguration[];
}

export {
    DataTypeConfiguration,
    DataTypePropertiesConfiguration,
    DataAdapterConfiguration,
    DataAdapterTypeConfiguration,
    DataTypeIndexer,
    DataConfigurationBase
}
