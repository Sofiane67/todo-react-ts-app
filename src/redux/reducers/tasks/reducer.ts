import { ADD_NEW_TASK } from "../../actions/tasks/types";
const initState: object[] = []; 

export const tasks = (state = initState, action: {type: string, value: {}}) => {
    let newState;
    switch (action.type) {
        case ADD_NEW_TASK:
            newState = [
                ...state,
                action.value
            ]
            break;
    
        default:
            return state;
    }
    console.log(newState)
    return newState
}