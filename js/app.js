window.Todos = Ember.Application.create();

// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
// Todos.ApplicationAdapter = DS.FirebaseAdapter.extend({
//     firebase: new Firebase('https://glaring-fire-8506.firebaseio.com')
// });

Todos.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase("https://todomvc-ember.firebaseio-demo.com/")
});
