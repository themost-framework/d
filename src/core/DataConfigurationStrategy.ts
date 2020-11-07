// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {ConfigurationBase, ConfigurationStrategy} from '@themost/common';
import {DATA_TYPES} from './DataTypes';

declare interface DataTypePropertiesConfiguration {
    pattern?: string;
    patternMessage?: string;
    minValue?: any;
    maxValue?: any;

}

declare interface DataTypeConfiguration {
    comment?: string;
    properties?: DataTypeConfiguration;
    label?: string;
    url?: string;
    type?: string;
    sqltype?: string;
    instances?: any[];
    supertypes?: string[];
    version: string;
}

declare interface DataAdapterConfiguration {
    name: string;
    invariantName: string;
    default?: boolean;
    options: any;
}

declare interface DataAdapterTypeConfiguration {
    name: string;
    invariantName: string;
    type: string;
}

class DataConfigurationStrategy extends ConfigurationStrategy {
    constructor(config:ConfigurationBase) {
        super(config);
    }

    get adapters(): DataAdapterConfiguration[] {
        return this.getConfiguration().getSourceAt('adapterTypes');
    }

    get adapterTypes(): DataAdapterTypeConfiguration[] {
        return this.getConfiguration().getSourceAt('adapters');
    }

    get dataTypes() {
        return DATA_TYPES;
    }

}

export {
    DataConfigurationStrategy,
    DataTypeConfiguration,
    DataTypePropertiesConfiguration,
    DataAdapterConfiguration,
    DataAdapterTypeConfiguration
}
