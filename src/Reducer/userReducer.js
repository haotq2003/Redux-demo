
import { CreateUserSus } from '../Actionn/actions';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS ,FETCH_USER_ERR,CREATE_USER_REQUEST,CREATE_USER_SUCCESS,CREATE_USER_ERR} from '../Actionn/types';


const INITIAL_STATE = {

    listUser:[],
    isLoading:false,
    isError:false,
    isCreate:false,
   
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
         console.log('FETCH_USER_REQUEST:',action)
           return {

             ...state,
            isLoading:true,
            isError:false,

           };
        
        case FETCH_USER_SUCCESS:
            console.log('FETCH_USER_SUCCESS:',action)
           return {
              ...state, listUser :action.dataUser, isLoading:false,
              isError:false,
           };
           
       case FETCH_USER_ERR:
         
           return {

             ...state,
             isLoading:false,
            isError:true,

           };
        case CREATE_USER_REQUEST:
        return {
      ...state,
      isCreate:true,
        };
        case CreateUserSus :
        return{
          ...state,isCreate:false,
        };

         default: return state;

    }

};

export default userReducer;