import { Model } from 'ember-pouch';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  comments: hasMany('comment'),
  body: attr('string'),
});
