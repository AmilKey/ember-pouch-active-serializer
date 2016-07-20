import Ember from 'ember';

const all = Ember.RSVP.all;

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
    }).then((savedComments)=>{
      const sc = savedComments.map(com=> {
        const answers = [
          this.store.createRecord('answer', {body: '111', comment: com}),
          this.store.createRecord('answer', {body: '222', comment: com}),
          this.store.createRecord('answer', {body: '333', comment: com}),
        ];
        com.get('answers').pushObjects(answers);
        return all(answers.map((a)=>a.save())).then(()=> com.save());
      });

      return all(sc);
    }).then(()=> {
      return post.save();
    });
  }
});
