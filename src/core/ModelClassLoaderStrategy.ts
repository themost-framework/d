// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {ConfigurationBase, ConfigurationStrategy} from '@themost/common';

abstract class ModelClassLoaderStrategy extends ConfigurationStrategy {
    protected constructor(config: ConfigurationBase) {
        super(config);
    }
    abstract resolve(): any;
}

export {
    ModelClassLoaderStrategy
}
