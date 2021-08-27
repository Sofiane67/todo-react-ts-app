import { ADD_NEW_TASK, COMPLETE_TASK, REACTIVATE_STATE, DELETE_ACTIVE_TASK, DELETE_COMPLETE_TASK } from './types';
import TaskModel from '../../../components/models/task';

export const addNewTask = (newTask: TaskModel) => {
    return (dispatch: (action: {
        type: string,
        value : TaskModel[]
    }) => void) => {
        dispatch({
            type: ADD_NEW_TASK,
            value: [newTask]
        })
    }
};

export const updateTask = (taskToUpdate: TaskModel) => {
    return (dispatch:(action:{
        type: string,
        value: TaskModel
    }) => TaskModel) => { 
        if(taskToUpdate.active){
            dispatch({
                type: REACTIVATE_STATE,
                value: taskToUpdate
            })
        }

        if(!taskToUpdate.active){
            dispatch({
                type: COMPLETE_TASK,
                value: taskToUpdate
            })
        }
    }
}

export const deleteTask = (active:TaskModel[], completed:TaskModel[], taskToDelete: TaskModel) => {
    return (dispatch:(action:{
        type: string,
        value: TaskModel[]
    }) => TaskModel) => { 
        if(taskToDelete.active){
            const id = active.indexOf(taskToDelete);
            active.splice(id,1)
            dispatch({
                type: DELETE_ACTIVE_TASK,
                value: active
            })
        }

        if(!taskToDelete.active){
            const id = completed.indexOf(taskToDelete);
            completed.splice(id,1)
            dispatch({
                type: DELETE_COMPLETE_TASK,
                value: completed
            })
        }
    }
}