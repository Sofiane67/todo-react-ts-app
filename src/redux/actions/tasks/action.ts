import { ADD_NEW_TASK } from "./types";

export const addNewTask = (newTask: {id: string, task: string, active: boolean}) => {
    console.log(newTask)
    return (dispatch: (action: {
        type: string,
        value : {
            id: string,
            task: string,
            active: boolean
        }
    }) => void) => {
        dispatch({
            type: ADD_NEW_TASK,
            value: {...newTask}
        })
    }
}