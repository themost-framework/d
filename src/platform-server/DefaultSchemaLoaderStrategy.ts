// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {ConfigurationBase, Args} from '@themost/common';
import {FileSchemaLoaderStrategy} from './FileSchemaLoaderStrategy';
import {SchemaLoaderStrategy, SchemaLoaderConfiguration} from '@themost/d/core';

class DefaultSchemaLoaderStrategy extends FileSchemaLoaderStrategy {
    public loaders: SchemaLoaderStrategy[];
    private readonly _options: SchemaLoaderConfiguration;
    constructor(configuration: ConfigurationBase) {
        super(configuration);
        // get schema configuration
        const options = configuration.getSourceAt('settings/schema');
        this._options = Object.assign({
            loaders: []
        }, options);
        // install strategy
        this.install();
    }
    protected install() {
        const configuration = this.getConfiguration();
        if (this._options && this._options.loaders && this._options.loaders.length) {
            this._options.loaders.forEach((loader) => {
                let LoaderCtor;
                if (typeof loader.loaderType === 'string') {
                    // match "any-module#AnySchemaLoader"
                    // or "any-module"
                    const matches = /^(.*?)(#(.*?))$/g.exec(loader.loaderType);
                    if (matches == null) {
                        throw new Error('Invalid loader type. Expected a valid module member expression.');
                    }
                    // import module
                    const module = require(matches[1]);
                    // get loader constructor
                    const member = matches[3];
                    Args.notEmpty(member, 'Loader constructor');
                    if (Object.prototype.hasOwnProperty.call(module, member) === false) {
                        throw new Error('Invalid loader type. Loader constructor cannot be resolved.');
                    }
                    // get loader constructor
                    LoaderCtor = module[member];
                    // push schema loader
                    this.loaders.push(new LoaderCtor(configuration));
                } else if (typeof loader.loaderType === 'function') {
                    // push schema loader
                    LoaderCtor = loader.loaderType;
                    this.loaders.push(new LoaderCtor(configuration));
                } else {
                    // throw error for invalid loader
                    throw new Error('Schema loader must a string or a class constructor');
                }
            });
        }
    }
}

export {
    DefaultSchemaLoaderStrategy
}
