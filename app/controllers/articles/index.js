import Ember from 'ember';

export default Ember.Controller.extend({
  possibleStates: ['borrowed', 'returned'],
  queryParams: ['showReturned'],
  showReturned: true,

  contentDidChange: Ember.observer('model.[]', function() {
    console.log('Called when we add or remove');
  }),

  stateDidChange: Ember.observer('model.@each.state', function() {
    console.log('Called when the state property is changed');
  }),

  filteredResults: Ember.computed('showReturned', function() {
    if (!this.get('showReturned')) {
      return this.get('model').filterBy('state','borrowed');
    } else {
      return this.get('model');
    }
  }),

  actions: {
    showReturned() {
      this.toggleProperty('showReturned');
      return false;
    }
  }
});
