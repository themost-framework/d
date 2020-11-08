// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {ConfigurationBase} from '@themost/common';
import {DATA_TYPES} from './DataTypes';
import {
    DataAdapterConfiguration,
    DataAdapterTypeConfiguration,
    DataConfigurationBase,
    DataTypeIndexer
} from './DataConfigurationBase';



class DataConfiguration extends ConfigurationBase implements DataConfigurationBase {
    constructor() {
        super();
    }

    get adapters(): DataAdapterConfiguration[] {
        return this.getSourceAt('adapterTypes');
    }

    get adapterTypes(): DataAdapterTypeConfiguration[] {
        return this.getSourceAt('adapters');
    }

    get dataTypes(): DataTypeIndexer  {
        return DATA_TYPES;
    }
}

export {
    DataConfiguration
}
