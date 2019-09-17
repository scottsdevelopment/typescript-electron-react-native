import { ElectronDatabase } from './services/ElectronDatabase';
// import { SequelizeDatabase } from './services/Sequelize';

async function performPreload() {
  try { 
    new ElectronDatabase();
  } catch(e) {
    console.log(e, e.stack);
  }
}

performPreload();

