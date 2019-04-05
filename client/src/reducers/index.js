const initialState = {
    photos: [],
    loading: false
  }

  export default function photosReducer(state = initialState, action) {

    switch(action.type) {

        case 'LOADING_PHOTOS':
        return Object.assign({}, state, { loading: true })

        case 'FETCH_PHOTOS':
          return {photos: action.payload}

      default: return state

    }

  }
