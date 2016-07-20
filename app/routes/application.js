import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    // return this.store.findAll('post');
    const post = this.store.createRecord('post', {body: 111});
    return post.save().then(()=> {
      const comments = [
        this.store.createRecord('comment', {body: '111', post}),
        this.store.createRecord('comment', {body: '222', post}),
        this.store.createRecord('comment', {body: '333', post}),
      ];
      post.get('comments').pushObjects(comments);
      return Ember.RSVP.all(comments.map((c)=>c.save()));
    }).then(()=>{
      return post.save();
    });
  }
});
