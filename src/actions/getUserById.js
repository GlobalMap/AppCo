import {fetchPending, fetchError, fetchUserById} from "./actions";
import { Requests as Api } from "../apiRequests";

function fetchUserByIdAction(id) {
    return dispatch => {
        dispatch(fetchPending());
        Api.getUserById(id)
            .then(res => {
                if (res.error) {
                    throw(res.error)
                }
                console.log(res.data.data)
                dispatch(fetchUserById(res.data.data))
                return res.data.data;
            })
            .catch(error => {
                dispatch(fetchError(error));
            })
    }
}

export default fetchUserByIdAction;