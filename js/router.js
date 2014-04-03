Todos.Router.map(function () {
    this.resource('todos', { path: '/' }, function () {
        this.route('active');
        this.route('completed');
    });
});

Todos.TodosRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('todo');
    }
});

Todos.TodosIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('todos');
    },

    renderTemplate: function (controller) {
        this.render('todos/index', {
            controller: controller
        });
    }
});

Todos.TodosActiveRoute = Todos.TodosIndexRoute.extend({
    model: function () {
        return this.store.filter('todo', function (todo) {
            return !todo.get('isCompleted');
        });
    }
});

Todos.TodosCompletedRoute = Todos.TodosIndexRoute.extend({
    model: function () {
        return this.store.filter('todo', function (todo) {
            return todo.get('isCompleted');
        });
    }
});
