const initialState = {
    photos: []
  }

  export default function photosReducer(state = initialState, action) {

    switch(action.type) {


        case 'FETCH_ENTRIES':

          return {...state, entries: action.payload}

      default: return state

    }

  }
