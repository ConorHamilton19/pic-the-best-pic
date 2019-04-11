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
  console.log(photo)
    return function (dispatch) {
        dispatch({ type: 'LOADING_PHOTOS' })
        return fetch(`http://localhost:3000/api/v1/photo/${photo.id}`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({photo})
            })
            }
          }
