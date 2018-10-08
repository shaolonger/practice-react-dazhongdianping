export function setCity(data) {
    return (dispatch) => {
        dispatch({
            type: 'SET_CITY',
            data: data
        });
    }
}
