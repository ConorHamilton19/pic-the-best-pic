export function fetchPhotos() {

    return function (dispatch) {
        dispatch({ type: 'LOADING_PHOTOS' })
        return fetch('http://localhost:3000/api/v1/photos')
            .then(res => {
                return res.json()
            }).then(responseJson => {
                dispatch({ type: 'FETCH_PHOTOS', payload: responseJson })
            })
    }
}

export function increaseVote(photo) {
    return function (dispatch) {
        return fetch(`http://localhost:3000/api/v1/photos/${photo.id}`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(photo)
            })
            .then(res => {
                return res.json()
            }).then(responseJson => {
                dispatch({ type: 'INCREASE_VOTE', payload: responseJson })
            })
    }
}
