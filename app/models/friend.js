import Ember from 'ember';
import DS from 'ember-data';
import changeGate from 'ember-computed-change-gate/change-gate';

export default DS.Model.extend({
  articles:       DS.hasMany('articles', {async :true}),
  firstName:      DS.attr('string'),
  lastName:       DS.attr('string'),
  email:          DS.attr('string'),
  twitter:        DS.attr('string'),
  totalArticles:  DS.attr('number'),
  fullName: Ember.computed('firstName', 'lastName', {
    get() {
      return this.get('firstName') + ' ' + this.get('lastName');
    },

    // pg. 107
    // "Why didn’t we mention that we can use a computed property as setter? This is a very uncommon
    // scenario that tends to cause a lot of confusion for people. Ideally, we use computed properties as
    // Read-Only. In a later version of Ember, this might be the default."

    // Then why bother mentioning it without a specific example of valuable uses?

    // set(key, value) {
    //   var name = value.split(' ');

    //   this.set('firstName', name[0]);
    //   this.set('lastName', name[1]);

    //   return value;
    // }
  }),
  capitalizedFirstName: changeGate('firstName', function(firstName) {
    return Ember.String.capitalize(firstName);
  })
});
