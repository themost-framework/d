// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {AbstractMethodError, Args, ConfigurationBase, ConfigurationStrategy} from '@themost/common';
import {DataModelMigrations} from './MigrationDataModel';
import {DataModelBase} from './DataModelBase';

class SchemaLoaderStrategy extends ConfigurationStrategy {

    private _models: Map<string, DataModelBase> = new Map<string, DataModelBase>();

    constructor(config: ConfigurationBase) {
        super(config);
        this.set(DataModelMigrations);
    }

    /**
     * @param {string} name
     * @returns {*}
     * @deprecated This method is going to be removed in future versions. Use SchemaLoaderStrategy.set(string,any) instead
     */
    getModelDefinition(name: string): any {
        Args.notString(name,'Model name');
        return this._models.get(name);
    }

    /**
     * @param {DataModelBase} data
     * @returns {SchemaLoaderStrategy}
     * @deprecated This method is going to be removed in future versions. Use SchemaLoaderStrategy.set(string,any) instead
     */
    setModelDefinition(data: DataModelBase): this {
        return this.set(data);
    }

    /**
     * Gets schema for the given data model
     * @param name
     */
    get(name: string): DataModelBase {
        return this._models.get(name);
    }

    /**
     * Sets schema for the specified data model
     * @param {DataModelBase} data
     */
    set(data: DataModelBase) {
        this._models.set(name, data);
        return this;
    }

    get models(): string[] {
        return Array.from(this._models.keys());
    }

    /**
     * @abstract
     * @returns Array<string>
     */
    readSync() {
        throw new AbstractMethodError();
    }
}

export {
    SchemaLoaderStrategy
}
