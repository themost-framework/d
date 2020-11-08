// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {DefaultDataConfiguration, DefaultSchemaLoaderStrategy} from '@themost/d/platform-server';
import * as path from 'path';
import {SchemaLoaderStrategy} from '@themost/d/core';

describe('DefaultDataConfiguration', () => {
    it('should create instance', () => {
        // get test app
        const configurationPath = path.resolve(__dirname, './test/config');
        const configuration = new DefaultDataConfiguration(configurationPath);
        expect(configuration).toBeTruthy();
        expect(configuration.getConfigurationPath).toBeTruthy(configurationPath);
    });
    it('should load schema loader', () => {
        const configurationPath = path.resolve(__dirname, './test/config');
        const configuration = new DefaultDataConfiguration(configurationPath);
        configuration.useStrategy(SchemaLoaderStrategy, DefaultSchemaLoaderStrategy);
        const schemaLoader = configuration.getStrategy(SchemaLoaderStrategy);
        expect(schemaLoader).toBeTruthy();
        expect(schemaLoader).toBeInstanceOf(DefaultSchemaLoaderStrategy);
    });
    it('should load schema', () => {
        const configurationPath = path.resolve(__dirname, './test/config');
        const configuration = new DefaultDataConfiguration(configurationPath);
        configuration.useStrategy(SchemaLoaderStrategy, DefaultSchemaLoaderStrategy);
        const schemaLoader = configuration.getStrategy(SchemaLoaderStrategy);
        const schema = schemaLoader.get('Product');
        expect(schema).toBeTruthy();
    });
});
