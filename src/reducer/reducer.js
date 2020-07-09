import {CREATEUSERACTION, REPLACESTATE} from '../Actions/Actions' ;

const Users = {
    users : []
};


const user_reducer = (state = Users, action) => {
    switch (action.type) {
        case CREATEUSERACTION:
            return {
                ...state,
                users :state.users.concat(action.payload)
            };

        case REPLACESTATE:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
};

export default user_reducer ;