import { GET_AVATARS_LIST, GET_FILTERED_LIST }  from '../../../redux/ActionTypes';
import Axios from '../../../utilities/AxiosConfig';
/**
 * function to get list of searched location
 * @param {string} query 
 */
export const getAvatarDetailedList = () => async (dispatch) => {
    try {
        let data = await Axios.get('');
        // console.log(data.data.results);
        dispatch({type:GET_AVATARS_LIST, payload : data.data.results});
    }
    catch(e) {
        console.log(e);
    }
}

export const getFilteredData = (val) => {
    return {type:GET_FILTERED_LIST, payload : val}
}