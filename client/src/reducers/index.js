const initialState = {
    photos: [],
    winners:[],
    loading: false
  }

  export default function photosReducer(state = initialState, action) {

    switch(action.type) {

        case 'LOADING_PHOTOS':
        return Object.assign({}, state, { loading: true })

        case 'FETCH_PHOTOS':
        return {...state, photos: action.payload}

        case 'FETCH_WINNER':
        return {...state, winners: action.payload}

        // case "INCREASE_VOTE":
        // return {
        //   ...state,
        //   photos: state.photos.map(photo => photo.id === action.id ?
        //       // transform the one with a matching id
        //       { ...photo, action.payload} :
        //       // otherwise return original photo
        //       photo
        //   )
        // };

      default: return state

    }

  }
