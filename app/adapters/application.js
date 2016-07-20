// import JSONAPIAdapter from 'ember-data/adapters/json-api';
import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';
PouchDB.debug.enable('*');

var db = new PouchDB('local_pouch');

export default Adapter.extend({
  // defaultSerializer: '-active-model',
  db,
});
