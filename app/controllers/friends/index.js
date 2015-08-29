import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,

  // We'll use sortBy to hold the name of the field we want to sort by
  sortBy: 'firstName',
  actions: {
    // The setSortBy function receives the name of the function and
    // toggle `sortAscending`. The function `toggleProperty` comes from the
    // [Observable Mixin](http://emberjs.com/api/classes/Ember.Observable.html)
    // it switches a boolean property between false and true.

    setSortBy: function (fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');

      console.log('sorting by: ', fieldName);
      console.log('sorting Asc?: ', this.get('sortAscending'));

      return false;
    }

  }
});
