// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {DataConfiguration, DataConfigurationBase, DataModelBase, SchemaLoaderStrategy} from '@themost/d/core';
import {ConfigurationBase} from '@themost/common';
import {readdirSync} from 'fs';
import {extname, resolve, basename} from 'path';

class FileSchemaLoaderStrategy extends SchemaLoaderStrategy {
    private _baseUrl: string;
    constructor(configuration: ConfigurationBase) {
        super(configuration);
        // resolve base directory
        this._baseUrl = resolve(configuration.getConfigurationPath(), 'models');
    }

    get baseUrl() {
        return this._baseUrl;
    }

    set baseUrl(value: string) {
        this._baseUrl = value;
    }

    get(name: string): DataModelBase {
        // try to find model
        const res = super.get(name);
        // if a model has been already set
        if (res) {
            // return it
            return res;
        }
        // check if the given name is a data type that has been already registered
        const dataConfiguration = this.getConfiguration() as DataConfiguration;
        if (dataConfiguration) {
            const findIndex = Object.keys(dataConfiguration.dataTypes).findIndex((key) => {
               return key === name;
            });
            // if a data type found
            if (findIndex >= 0) {
                // exit
                return;
            }
        }
        // otherwise get files
        const files = this.readSync();
        // build search pattern
        const search = new RegExp('^' + name + '$','i');
        // search collection
        const find = files.find((file) => {
            return search.test(file);
        });
        // if file has been found
        if (find) {
            // load model schema
            const schema = require(resolve(this.baseUrl, find.concat('.json')));
            // set model schema
            this.set(schema);
            // and return
            return schema;
        }
    }


    readSync() {
        // get schemas
        return readdirSync(this._baseUrl).filter((file: string) => {
            // get only .json files
            return extname(file) === '.json'
        }).map((file: string) => {
            // return file name only (without extension)
            return basename(file, extname(file));
        });
    }

}

export {
    FileSchemaLoaderStrategy
}
