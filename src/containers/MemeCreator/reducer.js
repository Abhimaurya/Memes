import { SEARCH_SUCCESS, SAVE_DATA, ADD_LOADER, CHANGE_POSITION ,CHANGE_CAPTION,CLEAR_DATA} from './constant.js';
export const initialState = {
    demo: false,
    imageData: null,
    loading: false,
    data: JSON.parse(localStorage.getItem('data')) || [],
  };

export default (state = initialState, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
          ...state,
       demo: true
      };

    case ADD_LOADER:{
        return {
            ...state,
            loading: true
        };
    }

    case SEARCH_SUCCESS: {
        console.log('result', action.payload);
        let imageData = null;
        if(action.payload && action.payload.length) {
            imageData = {...action.payload[0], position: 'center' }
        }

        return {
            ...state,
            imageData,
            loading: false
        };
    }
    case CHANGE_POSITION: {
        let imageData = null;
        if(state.imageData) {
            imageData = {...state.imageData, position: action.position }
        }

        return {
            ...state,
            imageData,
            loading: false
        };
    }
    case CHANGE_CAPTION: {
        console.log('caption', action.text);
        let imageData = null;
        if(state.imageData) {
            imageData = {...state.imageData, text: action.text }
        }

        return {
            ...state,
            imageData,
            loading: false
        };
    }
    case SAVE_DATA: {
        console.log('caption', action.text);
        let data = state.data;
        if(state.imageData) {
            data = [state.imageData, ...data]
        }
        console.log("getdata",data);
        localStorage.setItem('data', JSON.stringify(data));
        return {
            ...state,
            data,
            loading: false
        };
    }

    case CLEAR_DATA:{
        console.log('clearDATA', action.text);
        localStorage.clear();
        window.location.reload();
    }

     default:
      return state
    }
}