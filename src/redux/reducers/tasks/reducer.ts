import { ADD_NEW_TASK, COMPLETE_TASK, REACTIVATE_STATE, DELETE_ACTIVE_TASK, DELETE_COMPLETE_TASK } from '../../actions/tasks/types';
import TaskModel from "../../../components/models/task";

const initState: {
    active: TaskModel[],
    completed: TaskModel[]
} = {
    active: [],
    completed: []
}; 

export const tasks = (state = initState, action: {type: string, value: {}|object[]|number}) => {
    let newState;
    switch (action.type) {
        case ADD_NEW_TASK:
            newState = {
                ...state,
                active: [...state.active, action.value]
            }
            break;
        case COMPLETE_TASK:
            newState = {
                ...state,
                completed: [...state.completed, action.value]
            }
            break;
        case REACTIVATE_STATE:
            newState = {
                ...state,
                active: [...state.active, action.value]
            }
            break;
        case DELETE_ACTIVE_TASK:
            newState = {
                ...state,
                active: action.value
            }
            break;
        case DELETE_COMPLETE_TASK:
            newState = {
                ...state,
                completed: action.value
            }
            break;
        default:
            return state;
    }
    return newState
}