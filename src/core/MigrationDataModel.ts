// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved

import {DataModelBase} from './DataModelBase';

const DataModelMigrations: DataModelBase =
    {
        '@id': 'https://themost.io/schemas/migrations',
        name: 'Migration',
        title: 'Data Model Migrations',
        source: 'migrations',
        view: 'migrations',
        hidden: true,
        sealed: true,
        version: '0.1',
        fields: [
            {
                name: 'id',
                type: 'Counter',
                primary: true
            },
            {name: 'appliesTo', type: 'Text', size: 180, nullable: false},
            {name: 'model', type: 'Text', size: 120},
            {name: 'description', type: 'Text', size: 512},
            {name: 'version', type: 'Text', size: 40, nullable: false}
        ],
        constraints: [
            {
                type: 'unique',
                fields:
                    ['appliesTo',
                        'version'
                    ]
            }
        ]
    };

export {
    DataModelMigrations
}
