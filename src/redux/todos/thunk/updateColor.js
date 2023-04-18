import { colorSelected } from "../actions";

const updateColor = (todoId, color) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                id: todoId,
                color: color
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const todo = await response.json();
        console.log(todo.id)

        dispatch(colorSelected(todo.id, todo.color)); // Basically this is actual dispatch, so it will directly interact with UI, and by this process status are updated in UI, not in database.
    };
}

export default updateColor;
