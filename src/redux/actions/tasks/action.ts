import { ADD_NEW_TASK, COMPLETE_TASK, DELETE_TASK } from './types';
import { updateStorage } from '../../../utils/helpers';


export const addNewTask = (newTask: {id: string, task: string, active: boolean}) => {
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
};

export const updateTask = (tasksArray: object[]) => {
    return (dispatch:(action:{
        type: string,
        value: object[]
    }) => object[]) => {
        updateStorage(tasksArray);
        dispatch({
            type: COMPLETE_TASK,
            value: tasksArray
        });
    }
}

export const deleteTask = (tasksArray: [{id: string, task: string, active: boolean}]) => {
    return (dispatch: (action:{
        type: string,
        value: object[]
    }) => object[]) => {
        updateStorage(tasksArray);
        dispatch({
            type: DELETE_TASK,
            value: tasksArray
        })
    }
}