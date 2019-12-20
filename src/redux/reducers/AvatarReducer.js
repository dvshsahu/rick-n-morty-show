import { GET_AVATARS_LIST, GET_FILTERED_LIST, GET_SORTED_LIST } from '../ActionTypes';


let initialState = {
    avatarList: [],
    selectedFilter : []
}

/**
 * Redux reducer to maintain restaurant store
 * @param {object} state 
 * @param {object} action 
 * @returns {object} - updated state
 */
const AvatarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AVATARS_LIST: {
            return { ...state, avatarList: action.payload };
        }
        case GET_SORTED_LIST: {
            const avatarList = [...state.avatarList];
            let data = action.payload == "ASC" ?
                avatarList.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)) :
                avatarList.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
            return { ...state, avatarList: data };
        }

        case GET_FILTERED_LIST: {
            let avatarList = [...action.payload.data];
            avatarList = action.payload.val.length === 0 ? avatarList :
                avatarList.filter((avatar) =>
                    (action.payload.val.includes(avatar.species) ||
                        action.payload.val.includes(avatar.gender))
                );


            return { ...state, avatarList: avatarList, selectedFilter : [...action.payload.val] };
        }

        default: {
            return state;
        }
    }
}

export default AvatarReducer;