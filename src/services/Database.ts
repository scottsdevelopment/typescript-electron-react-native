import { getRepository as nodeGetRepository, createConnection, ConnectionOptions, EntitySchema, Connection } from 'typeorm';
import { ConnectionOptions as BrowserConnectionOptions, Connection as BrowserConnection } from 'typeorm/browser';
import { Entities } from '../Entities';
import { Platform } from 'react-native'
// Allow for global TypeOrm connection
declare global {
    interface Window { TypeOrm: Connection|BrowserConnection|null; }
};

const ElectronConnectionOptions: ConnectionOptions = {
    type: 'sqlite',
    database: 'database.sql',
    logging: 'all',
    logger: 'simple-console',
    synchronize: true,
    entities: Entities
};

const ReactNativeConnectionOptions: BrowserConnectionOptions = {
    type: 'react-native',
    location: 'default',
    database: 'database.sql',
    logging: 'all',
    synchronize: true,
    entities: Entities
};
  
export class Database {
    internalGetRepository: Function;
   
    constructor() {
    }

    async load() {
        if (Platform.OS == 'web') {
            await this.loadElectronConnection(ElectronConnectionOptions);
        }
        else {
            await this.loadReactNativeConnection(ReactNativeConnectionOptions);
        }
    }

    async loadElectronConnection(options: ConnectionOptions) {
        this.internalGetRepository = nodeGetRepository;
        const connection: Connection = await createConnection(options);
        window.TypeOrm = connection;
    }

    async loadReactNativeConnection(options: BrowserConnectionOptions) {
        const typeOrmBrowser = await import('typeorm/browser');
        this.internalGetRepository = typeOrmBrowser.getRepository;
        const connection: BrowserConnection = await typeOrmBrowser.createConnection(options);
        window.TypeOrm = connection;
    }

    getRepository(entity: Function|EntitySchema<any>) {
        return this.internalGetRepository((entity as Function).name);
    }
}