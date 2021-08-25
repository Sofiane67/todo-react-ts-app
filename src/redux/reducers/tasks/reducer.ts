import { ADD_NEW_TASK, COMPLETE_TASK, DELETE_TASK } from '../../actions/tasks/types';
const initState: object[] = []; 

export const tasks = (state = initState, action: {type: string, value: {}|object[]}) => {
    let newState;
    switch (action.type) {
        case ADD_NEW_TASK:
            newState = [
                ...state,
                action.value
            ]
            break;
        case COMPLETE_TASK:
            newState = action.value;
            break;

        case DELETE_TASK:
            newState = action.value;
            break;
        default:
            return state;
    }
    return newState
}