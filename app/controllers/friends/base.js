import Ember from 'ember';

export default Ember.Controller.extend({
  hasEmail:     Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName:  Ember.computed.notEmpty('model.lastName'),
  hasTwitter:   Ember.computed.notEmpty('model.twitter'),
  isValid:      Ember.computed.and(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter'
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          this.transitionToRoute('articles.index', friend);
        });
      } else {
        this.set('errorMessage', 'You have to fill in all the fields');
      }
      return false;
    },
    cancel() {
      return true;
    }
  }
});
