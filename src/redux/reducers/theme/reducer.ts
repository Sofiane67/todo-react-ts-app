import { LIGHT_THEME } from "../../actions/theme/types";

const initState = {
    lightTheme: true,
    color: "light"
};

export const theme = (state = initState, action: {
    type: any,
    value: any
}) => {
    let newState;

    switch (action.type) {
        case LIGHT_THEME:
            newState = {
                ...state
            }
            break;
    
        default:
            return state;
    }
    return newState
}

