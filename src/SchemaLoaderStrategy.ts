// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {AbstractMethodError, Args, ConfigurationBase, ConfigurationStrategy} from '@themost/common';
import {DATA_MODEL_MIGRATIONS} from './MigrationDataModel';
import {DataModelBase} from './DataModelBase';

class SchemaLoaderStrategy extends ConfigurationStrategy {

    private _models: Map<string, DataModelBase> = new Map<string, DataModelBase>();

    constructor(config: ConfigurationBase) {
        super(config);
        this.set(DATA_MODEL_MIGRATIONS);
    }

    /**
     * Gets a model definition
     * @param {string} name
     * @returns {*}
     * @deprecated Use SchemaLoaderStrategy.set(string,any) instead
     */
    getModelDefinition(name: string): any {
        Args.notString(name,'Model name');
        return this._models.get(name);
    }

    /**
     * Sets a model definition
     * @param {*} data
     * @returns {SchemaLoaderStrategy}
     * @deprecated Use SchemaLoaderStrategy.set(string,any) instead
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
     * @param {*} data
     */
    set(data: any) {
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
