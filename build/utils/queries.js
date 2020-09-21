"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropPetTable = exports.insertPets = exports.createPetTable = void 0;
var createPetTable = "\nDROP TABLE IF EXISTS pet;\nCREATE TABLE IF NOT EXISTS pet (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(50) NOT Null,\n  type VARCHAR(50) NOT NULL,\n  breed VARCHAR(50) NOT NULL,\n  location VARCHAR(50) DEFAULT '',\n  latitude FLOAT DEFAULT 0.0,\n  longitude FLOAT DEFAULT 0.0,\n  CONSTRAINT name_breed UNIQUE (name,breed)\n  )\n  ";
exports.createPetTable = createPetTable;
var insertPets = "\nINSERT INTO pet(name, type, breed, location, latitude, longitude)\nVALUES ('name1', 'cat','breed1','Sask1',null,null),\n      ('name2', 'dog','breed2','Sask2',123.44,444.4)\n";
exports.insertPets = insertPets;
var dropPetTable = 'DROP TABLE pet';
exports.dropPetTable = dropPetTable;