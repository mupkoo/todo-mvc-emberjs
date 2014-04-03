window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase('https://glaring-fire-8506.firebaseio.com')
});
