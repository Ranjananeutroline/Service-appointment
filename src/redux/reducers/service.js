// reducers/auth.js
const initialState = {
  
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case "GET_ALL_SERVICES":
      return { ...state, error: null, service: action.payload };
     
    
    default:
      return state;
  }
};

export default serviceReducer;