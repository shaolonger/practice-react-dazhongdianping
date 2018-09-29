export function setUserName(data) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_USERNAME',
            data: data
        });
    }
}

export function setCarData() {
    return (dispatch, getState) => {
        const url = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10';
        window.fetch(url, {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            dispatch({
                type: 'SET_CARDATA',
                data: data
            })
        })
    }
}
