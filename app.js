const app = new Vue ({
    el: '#app',
    data: {
        title: 'Todo-App with Vue.js',
        newTodo: '',
        // create an empty array to push todos into
        todos: [],
    },
    // object where functions go
    methods: {
        addTodo() {
            // use 'this' to refer to the instance and access the data above
            // push an object that includes the 'todo' and 'done' for future use
            this.todos.push({
                title: this.newTodo,
                done: false,

            });
            // clears out the form 
            this.newTodo = ''
        }

    }
})