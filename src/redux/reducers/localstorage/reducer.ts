const initState = false;

export const localStorage = (state = initState, action:{type: string, value: boolean}) => {
    let newState;

    switch (action.type) {
        case "STORE_UPDATE":
            newState = action.value;
            break;
        default:
            return state;
    }
    return newState
}