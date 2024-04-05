export const middleware = (value) => async(dispatch) => {
    dispatch({
        type:'aa',
        payload: value
    })
}