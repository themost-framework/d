// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {ConfigurationBase} from '@themost/common';
import {DataConfigurationStrategy} from './DataConfigurationStrategy';

class DataConfiguration extends ConfigurationBase {
    constructor() {
        super();
        this.useStrategy(DataConfigurationStrategy, DataConfigurationStrategy);
    }
}

export {
    DataConfiguration
}
