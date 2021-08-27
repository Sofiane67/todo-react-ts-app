import { ADD_NEW_TASK, COMPLETE_TASK, REACTIVATE_STATE, DELETE_ACTIVE_TASK, DELETE_COMPLETE_TASK } from '../../actions/tasks/types';
import TaskModel from "../../../components/models/task";

const initState: {
    active: TaskModel[],
    completed: TaskModel[],
    allTasks: TaskModel[],
} = {
    active: [],
    completed: [],
    allTasks: []
}; 

export const tasks = (state = initState, action: {type: string, value: TaskModel[]}) => {
    let newState;
    switch (action.type) {
        case ADD_NEW_TASK:
            newState = {
                ...state,
                active: [...state.active, action.value[0]],
                allTasks: [...state.active, ...state.completed, action.value[0]]
            }
            break;
        case COMPLETE_TASK:
            newState = {
                ...state,
                completed: [...state.completed, action.value],
                allTasks: [...state.active, ...state.completed, action.value]
            }
            break;
        case REACTIVATE_STATE:
            newState = {
                ...state,
                active: [...state.active, action.value],
                allTasks: [...state.active, ...state.completed, action.value]
            }
            break;
        case DELETE_ACTIVE_TASK:
            const a:TaskModel[] = action.value;
            newState = {
                ...state,
                active: action.value,
                allTasks: a.concat(state.completed)
            }
            break;
        case DELETE_COMPLETE_TASK:
            const b:TaskModel[] = action.value;
            newState = {
                ...state,
                completed: action.value,
                allTasks: b.concat(state.active)
            }
            break;
        default:
            return state;
    }
    return newState
}