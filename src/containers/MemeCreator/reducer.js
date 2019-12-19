export const initialState = {
    demo: false,
  };

export default (state = initialState, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
          ...state,
       demo: true
      }
     default:
      return state
    }
}