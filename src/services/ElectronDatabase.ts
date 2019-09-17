import { createConnection, ConnectionOptions, Connection } from 'typeorm';
import { Entities } from '../Entities';
declare global {
  interface Window { TypeOrm: Connection }
};

const ElectronConnectionOptions: ConnectionOptions = {
    type: 'sqlite',
    name: 'default',
    database: 'database.sql',
    logging: 'all',
    logger: 'simple-console',
    synchronize: true,
    entities: Entities
};
  
export class ElectronDatabase {
    constructor() {
        this.load();
    }

    async load() {
        const connection: Connection = await createConnection(ElectronConnectionOptions);
        window.TypeOrm = connection;
    }
}

export default ElectronDatabase;