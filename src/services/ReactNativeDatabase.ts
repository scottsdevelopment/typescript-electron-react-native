import { createConnection, ConnectionOptions } from 'typeorm';
import { Entities } from '../Entities';

const ReactNativeConnectionOptions: ConnectionOptions = {
    type: 'react-native',
    location: 'default',
    name: 'default',
    database: 'database.sql',
    logging: 'all',
    synchronize: true,
    entities: Entities
};
  
export class ReactNativeDatabase {
    platformType: string;
    constructor() {
    }

    async load() {
        await createConnection(ReactNativeConnectionOptions);
    }
}

export default ReactNativeDatabase;