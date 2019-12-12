import { GET_AVATARS_LIST, GET_FILTERED_LIST } from '../ActionTypes';

// let initialState = {
//     id : 0,
//     name : '',
//     status: '',
//     species: '',
//     type: '',
//     gender: '',
//     origin: {
//         name: '',
//         url: ''
//     },
//     location: {
//         name: '',
//         url: ''
//     },
//     image: '',
//     episode : [],
//     url : '',
//     created : ''
// }
let initialState = {
    avatarList : []
}

/**
 * Redux reducer to maintain restaurant store
 * @param {object} state 
 * @param {object} action 
 * @returns {object} - updated state
 */
const AvatarReducer = (state=initialState,action) => {
    switch(action.type) {
        case GET_AVATARS_LIST : {
            return {...state, avatarList:action.payload};
        }
        case GET_FILTERED_LIST : {
            let data  = action.payload == "ASC" ? 
             state.avatarList.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)) : 
             state.avatarList.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
            return {avatarList:data};
        }
        
        default : {
            return state;
        }
    }
}

export default AvatarReducer;