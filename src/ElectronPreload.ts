import { DatabaseService } from './services/DatabaseService';


async function performPreload() {
  try {  
    const dbService = new DatabaseService();
    await dbService.load();
  } catch(e) {
    console.log(e, e.stack);
  }
}

performPreload();

