// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {DefaultDataConfiguration, DefaultSchemaLoaderStrategy, FileSchemaLoaderStrategy} from '@themost/d/platform-server';
import * as path from 'path';
import {SchemaLoaderConfiguration, SchemaLoaderStrategy} from '@themost/d/core';
import {ConfigurationBase} from '@themost/common';

class AdditionalSchemaLoader extends FileSchemaLoaderStrategy {
    constructor(configuration: ConfigurationBase) {
        super(configuration);
        this.baseUrl = path.resolve(__dirname, 'test/otherConfig/models');
    }
}

describe('DefaultDataConfiguration', () => {
    const testConfigurationPath = path.resolve(__dirname, './test/config');
    it('should create instance', () => {
        // get test app
        const configuration = new DefaultDataConfiguration(testConfigurationPath);
        expect(configuration).toBeTruthy();
        expect(configuration.getConfigurationPath).toBeTruthy(testConfigurationPath);
    });
    it('should use SchemaLoaderStrategy', () => {
        const configuration = new DefaultDataConfiguration(testConfigurationPath);
        configuration.useStrategy(SchemaLoaderStrategy, DefaultSchemaLoaderStrategy);
        const schemaLoader = configuration.getStrategy(SchemaLoaderStrategy);
        expect(schemaLoader).toBeTruthy();
        expect(schemaLoader).toBeInstanceOf(DefaultSchemaLoaderStrategy);
    });
    it('should use DefaultDataConfiguration.get()', () => {
        const configuration = new DefaultDataConfiguration(testConfigurationPath);
        configuration.useStrategy(SchemaLoaderStrategy, DefaultSchemaLoaderStrategy);
        const schemaLoader = configuration.getStrategy(SchemaLoaderStrategy);
        let schema = schemaLoader.get('Product');
        expect(schema).toBeTruthy();
        schema = schemaLoader.get('Product1');
        expect(schema).toBeFalsy();
    });

    it('should should use DefaultDataConfiguration.get() to load additional schemas', () => {
        const configuration = new DefaultDataConfiguration(testConfigurationPath);
        configuration.setSourceAt('settings/schema', {
            loaders: [
                {
                    loaderType: AdditionalSchemaLoader
                }
            ]
        } as SchemaLoaderConfiguration);
        configuration.useStrategy(SchemaLoaderStrategy, DefaultSchemaLoaderStrategy);
        const schemaLoader = configuration.getStrategy(SchemaLoaderStrategy);
        const schema = schemaLoader.get('Company');
        expect(schemaLoader.models.indexOf('Company')).toBeGreaterThanOrEqual(0);
    });
});
