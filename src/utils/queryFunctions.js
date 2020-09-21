import { pool } from '../models/pool';
import {
  createPetTable,
  insertPets,
  dropPetTable,
} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropPetTable ]);
export const createTables = () => executeQueryArray([ createPetTable ]);
export const insertIntoTables = () => executeQueryArray([ insertPets ]);