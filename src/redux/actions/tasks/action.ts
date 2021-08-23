import storage from 'redux-persist/lib/storage';
import { ADD_NEW_TASK, COMPLETE_TASK } from './types';

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

        storage.getItem("persist:root")
        .then(dataStored => {
            if(dataStored){
                const{_persist} = JSON.parse(dataStored);
                const tasks = JSON.stringify(tasksArray);
                storage.setItem("persist:root", JSON.stringify({tasks,_persist}));
            }
        }); 

        dispatch({
            type: COMPLETE_TASK,
            value: tasksArray
        })
    }
}