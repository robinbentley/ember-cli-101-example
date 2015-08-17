import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let articles = this.modelFor('friends/show').get('articles');

    if (articles.get('isFulfilled')) {
      articles.reload();
    }

    return articles;
  },
  actions: {
    save(model) {
      model.save();
      return false;
    }
  }
});
