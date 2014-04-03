Todos.TodosController = Ember.ArrayController.extend({
    remainingCount: function () {
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function () {
        return this.get('remainingCount') == 1 ? 'todo' : 'todos';
    }.property('remainingCount'),

    actions: {
        create: function () {
            var title = this.get('newTitle');

            if (!title.trim()) { return; }

            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            this.set('newTitle', '');

            todo.save()
        }
    }
});
