
import { INCREMENT, DECREMENT } from '../Actionn/types';


const INITIAL_STATE = {

    count: 0,
    name:'fifa',
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case INCREMENT:
          console.log("Running INCREMENT")
           return {

             ...state, count: state.count + 1,

           };

        case DECREMENT:
          console.log("Running DECREMENT")
           return {
              ...state, count: state.count - 1,

           };

         default: return state;

    }

};

export default reducer;