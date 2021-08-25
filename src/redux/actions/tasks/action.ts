import { ADD_NEW_TASK, COMPLETE_TASK, DELETE_TASK } from './types';
import { updateStorage } from '../../../utils/helpers';
import TaskModel from '../../../components/models/task';


export const addNewTask = (newTask: TaskModel) => {
    return (dispatch: (action: {
        type: string,
        value : TaskModel
    }) => void) => {
        dispatch({
            type: ADD_NEW_TASK,
            value: {...newTask}
        })
    }
};

export const updateTask = (tasksArray: TaskModel[]) => {
    return (dispatch:(action:{
        type: string,
        value: TaskModel[]
    }) => TaskModel[]) => {
        updateStorage(tasksArray);
        dispatch({
            type: COMPLETE_TASK,
            value: tasksArray
        });
    }
}

export const deleteTask = (tasksArray: TaskModel[]) => {
    return (dispatch: (action:{
        type: string,
        value: TaskModel[]
    }) => TaskModel[]) => {
        updateStorage(tasksArray);
        dispatch({
            type: DELETE_TASK,
            value: tasksArray
        })
    }
}