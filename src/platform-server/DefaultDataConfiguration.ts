// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {ConfigurationBase} from '@themost/common';
import {
    DATA_TYPES,
    DataAdapterConfiguration,
    DataAdapterTypeConfiguration,
    DataConfigurationBase,
    DataTypeIndexer
} from '@themost/d/core';

class DefaultDataConfiguration extends ConfigurationBase implements DataConfigurationBase {
    constructor(cwd: string) {
        super(cwd);
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
    DefaultDataConfiguration
}
