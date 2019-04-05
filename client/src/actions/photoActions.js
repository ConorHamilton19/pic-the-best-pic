export function fetchPhotos() {

    return function (dispatch) {
        dispatch({ type: 'LOADING_PHOTOS' })
        return fetch('http://localhost:3000/api/v1/photos')
            .then(res => {
                return res.json()
            }).then(responseJson => {
                dispatch({ type: 'FETCH_PHOTOS', payload: responseJson.photos })
            })
    }
}
