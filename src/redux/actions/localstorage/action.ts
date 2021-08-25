export const storageIsUpdated = (isUpdated: boolean) => {
    return (dispatch: (action:{type: string, value: boolean}) => boolean) => {
        dispatch({
            type: "STORE_UPDATE",
            value: isUpdated
        })
    }
}