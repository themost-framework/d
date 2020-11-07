// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {DataConfiguration, DataConfigurationStrategy} from '@themost/d/core';

describe('DataConfiguration', () => {
    it('should create instance', () => {
        const configuration = new DataConfiguration();
        expect(configuration).toBeTruthy();
    });
    it('should has default configuration strategy', () => {
        const configuration = new DataConfiguration();
        const dataConfiguration = configuration.getStrategy(DataConfigurationStrategy);
        expect(dataConfiguration).toBeTruthy();
    });
});
