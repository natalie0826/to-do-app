export const addCategory = (category, color) => ({
    type: constants.ADD_CATEGORY,
    category,
    color
});

export const fetchTodos = () => {
    return (dispatch) => {
        return fetch('https://api.myjson.com/bins/wqrmt')
            .then(response => response.json())
            .then(todos => todos.map(todo => dispatch(addTodo(todo.text, todo.category, todo.text, todo.completed, todo.deleted)))); // addTodo = initializeStore
    };
};
