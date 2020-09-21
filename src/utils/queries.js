export const createPetTable = `
DROP TABLE IF EXISTS pet;
CREATE TABLE IF NOT EXISTS pet (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT Null,
  type VARCHAR(50) NOT NULL,
  breed VARCHAR(50) NOT NULL,
  location VARCHAR(50) DEFAULT '',
  latitude FLOAT DEFAULT 0.0,
  longitude FLOAT DEFAULT 0.0,
  CONSTRAINT name_breed UNIQUE (name,breed)
  )
  `;

export const insertPets = `
INSERT INTO pet(name, type, breed, location, latitude, longitude)
VALUES ('name1', 'cat','breed1','Sask1',null,null),
      ('name2', 'dog','breed2','Sask2',123.44,444.4)
`;

export const dropPetTable = 'DROP TABLE pet';
