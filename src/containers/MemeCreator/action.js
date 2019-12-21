/*
 src/actions/simpleAction.js
*/
import { SEARCH_SUCCESS, SEARCH_FAILURE, ADD_LOADER, CHANGE_POSITION, CHANGE_CAPTION, SAVE_DATA ,CLEAR_DATA} from './constant.js';
export const demoAction = () => dispatch => {

    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
};

export function searchAction  (query)  {
    // console.log('here also');
    return dispatch => {
        console.log('inside')
        dispatch({ type: ADD_LOADER});
        fetch('http://www.splashbase.co/api/v1/images/search?query=' + query)
            .then(resp => resp.json())
            .then(result => {
                console.log('result hete', result);
                dispatch({
                    type: SEARCH_SUCCESS,
                    payload: result.images,
                });
            })
            .catch(() => {
                dispatch({
                    type: SEARCH_FAILURE,
                });
            });
    };
};

export function changePosition(position)  {
    console.log('position', position);
    return {
        type: CHANGE_POSITION,
        position
    };
};

export function changeCaption(text)  {
    console.log('text', text);
    return {
        type: CHANGE_CAPTION,
        text
    };
};


export function saveData(text)  {
    console.log('text', text);
    return {
        type: SAVE_DATA,
        text
    };
};

export function clearData(text)  {
    console.log('text', text);
    return {
        type: CLEAR_DATA,
        text
    };
};

