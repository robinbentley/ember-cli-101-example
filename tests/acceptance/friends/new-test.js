import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'borrowers/tests/helpers/start-app';

module('Acceptance | friends/new', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /friends/new', function(assert) {
  visit('/friends/new');

  andThen(function() {
    assert.equal(currentURL(), '/friends/new');
  });
});


test('creating a new friend', function(assert) {
  visit('/');
  click('a[href="/friends/new"]');

  andThen(function() {
    assert.equal(currentPath(), 'friends.new');
  });

  fillIn('input[placeholder="First Name"]', 'Kendrick');
  fillIn('input[placeholder="Last Name"]', 'Lamar');
  fillIn('input[placeholder="Email"]', 'kendrick"k.com');
  fillIn('input[placeholder="Twitter"]', '@kdot');
  click('input[value="Save Friend"]');

  andThen(function() {
    assert.equal(
      currentRouteName(),
      'articles.index',
      'Redirects to articles.index after create'
    );
  });
});


test('clicking save without filling in fields', function(assert) {
  visit('/friends/new');
  click('input[value="Save Friend"]');

  andThen(function() {
    assert.equal(
      currentRouteName(),
      'friends.new',
      'Stays on new page'
    );
    assert.equal(
      find('h2:contains(You have to fill in all the fields)').length,
      true,
      'Displays error message'
    );
  });
});
