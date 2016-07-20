// import Model from 'ember-data/model';
import { Model } from 'ember-pouch';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  comment: belongsTo('comment'),
  body: attr('string')
});
