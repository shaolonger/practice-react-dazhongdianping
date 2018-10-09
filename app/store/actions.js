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

export const setCollect = {
    add(data) {
        return (dispatch) => {
            dispatch({
                type: 'ADD_COLLECT',
                data: data
            })
        }
    },
    del(data) {
        return (dispatch) => {
            dispatch({
                type: 'DELETE_COLLECT',
                data: data
            })
        }
    }
}
