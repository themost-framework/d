// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {SchemaLoaderStrategy} from '@themost/d/core';
import {ConfigurationBase} from '@themost/common';

class DefaultSchemaLoaderStrategy extends SchemaLoaderStrategy {
    constructor(configuration: ConfigurationBase) {
        super(configuration);
    }
}

export {
    DefaultSchemaLoaderStrategy
}
