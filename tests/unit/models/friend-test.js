import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('friend', 'Unit | Model | friend', {
  // Specify the other units that are required for this test.
  needs: ['model:article']
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model, 'Friend model exists');
});

test('fullName joins first and last name', function(assert) {
  var model = this.subject({firstName: 'Kendrick', lastName: 'Lamar'});

  assert.equal(model.get('fullName'), 'Kendrick Lamar', 'Returns fullName');

  Ember.run(function() {
    model.set('firstName', 'Andre');
  });

  assert.equal(model.get('fullName'), 'Andre Lamar', 'Updates fullName');
});


test('articles relationship', function(assert) {
  var klass = this.subject({}).constructor;

  var relationship = Ember.get(klass, 'relationshipsByName').get('articles');

  assert.equal(relationship.key, 'articles', 'Friend model is related to articles');
  assert.equal(relationship.kind, 'hasMany', 'Friend to Article relationship is hasMany');
});
