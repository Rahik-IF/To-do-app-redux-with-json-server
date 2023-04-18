import { toggled } from "../actions";

const updateStatus = (todoId, currentStatus) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                id: todoId,
                completed: !currentStatus
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const todo = await response.json();
        console.log(todo.id)

        dispatch(toggled(todo.id));  // Basically this is actual dispatch, so it will directly interact with UI, and by this process status are updated in UI, not in database.
    };
}

export default updateStatus;
