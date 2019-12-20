import { GET_AVATARS_LIST, GET_FILTERED_LIST, GET_SORTED_LIST } from '../../../redux/ActionTypes';
import Axios from '../../../utilities/AxiosConfig';
// import { DATA } from '../../../stubs/data.js';
/**
 * function to get list of searched location
 * @param {string} query 
 */
export const getAvatarDetailedList = () => async (dispatch) => {
    try {
        // let data = DATA;
        let data = await Axios.get('');
        dispatch({ type: GET_AVATARS_LIST, payload: data.data.results });
    }
    catch (e) {
        console.log(e);
    }
}

export const getsortedData = (val) => {
    return { type: GET_SORTED_LIST, payload: val }
}

export const getFilteredData = (val) => async (dispatch) => {
    try {
        let data = await Axios.get('');
        dispatch({ type: GET_FILTERED_LIST, payload: { data: data.data.results, val } });
    }
    catch (e) {
        console.log(e);
    }
   
}