Todos.TodoController = Ember.ObjectController.extend({
    isEditing: false,

    isCompleted: function (key, value) {
        var model = this.get('model');

        if (value === undefined) {
            return model.get('isCompleted')
        } else {
            model.set('isCompleted', value);
            model.save();

            return value;
        }
    }.property('model.isCompleted'),

    actions: {
        editTodo: function () {
            this.set('isEditing', true);
        },

        update: function () {
            this.set('isEditing', false);
            this.get('model').save();
        }
    }
});
