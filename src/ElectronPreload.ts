import { Database } from './services/Database';


async function performPreload() {
  try {  
    const dbService = new Database();
    await dbService.load();
  } catch(e) {
    console.log(e, e.stack);
  }
}

performPreload();

