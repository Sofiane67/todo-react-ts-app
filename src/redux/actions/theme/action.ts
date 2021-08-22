export const changeTheme = (Actiontype:string) => {
    return (dispatch: (action:{type: string}) => void) => {
        dispatch({type: Actiontype })
    }
}