/*
 src/actions/simpleAction.js
*/
export const demoAction = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
}