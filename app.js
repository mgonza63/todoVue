const app = new Vue ({
    el: '#app',
    data: {
        title: 'To-Do App with Vue.js',
        newTodo: '',
        // create an empty array to push todos into
        todos: [],
    },
    // object where functions go
    methods: {
        addTodo() {
            // use 'this' to refer to the instance and access the data above
            // push an object (in case we want to add more attributes) 
            // that includes the title of the todo. 
            this.todos.push({
                title: this.newTodo,
            });
            // clears out the form 
            this.newTodo = ''
        },
        //todoIndex select the index of the selected todo
        // splice removes the selected todo in the array
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        }

    }
})