import { deleted } from "../actions";

const deleteTodo = (todoId) => {
    return async (dispatch) => {
     await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "DELETE"
        })

        dispatch(deleted(todoId)); // Basically this is actual dispatch, so it will directly interact with UI, and by this process status are updated in UI, not in database.
    };
}

export default deleteTodo;
