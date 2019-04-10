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

        // case "INCREASE_VOTE":
        // return {
        //   ...state,
        //   photos: state.photos.map(photo => photo.id === action.id ?
        //       // transform the one with a matching id
        //       { ...photo, vote_count: vote_count += 1 } :
        //       // otherwise return original photo
        //       photo
        //   )
        // };

      default: return state

    }

  }
