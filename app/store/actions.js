export function setCity(data) {
    return (dispatch) => {
        dispatch({
            type: 'SET_CITY',
            data: data
        });
    }
}

export function setUserName(data) {
    return (dispatch) => {
        dispatch({
            type: 'SET_USERINFO',
            data: data
        });
    }
}
