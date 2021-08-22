import { LIGHT_THEME, DARK_THEME } from "../../actions/theme/types";

const initState:{
    lightTheme: boolean,
    color: string
} = {
    lightTheme: true,
    color: "light"
};

export const theme = (state=initState, action:{type: any, value:{lightTheme: boolean, color: string}}) => {
    let newState;

    switch (action.type) {
        case LIGHT_THEME:
            newState = {
                lightTheme: true,
                color: "light"
            }
            break;
        
        case DARK_THEME:
            newState = {
                lightTheme: false,
                color: "dark"
            }
            break;
        default:
            return state;
    }
    return newState
}

