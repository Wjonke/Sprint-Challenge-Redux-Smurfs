import {
  FETCH_SMURFS_START, 
  FETCH_SMURFS_SUCCESS, 
  FETCH_SMURFS_FAIL, 
  ADD_SMURFS_START, 
  ADD_SMURFS_SUCCESS, 
  ADD_SMURFS_FAIL
} from '../actions/index';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  }




const rootReducer = (state= initialState, action) => {
  switch (action.type) {
    //FETCH SMURFS------------------------------------------------//
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: '',
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      };
    
      //ADD SMURF-------------------------------------------------//
    case ADD_SMURFS_START:
        return {
          ...state,
          addingSmurf: true,
          error: ''
        };
      case ADD_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          addingSmurf: false,
          error: '',
        };
      case ADD_SMURFS_FAIL:
        return {
          ...state,
          addingSmurf: false,
          error: action.payload,
        };

      default: return state;
  }
};


export default rootReducer;







/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
