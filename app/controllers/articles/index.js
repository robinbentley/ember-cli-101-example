import Ember from 'ember';

export default Ember.Controller.extend({
  possibleStates: ['borrowed', 'returned'],
  contentDidChange: Ember.observer('model.[]', function() {
    console.log('Called when we add or remove');
  }),
  stateDidChange: Ember.observer('model.@each.state', function() {
    console.log('Called when the state property is changed');
  })
});
