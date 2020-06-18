import {fetchPending, fetchError, fetchUsersSucces} from "./actions";
import { Requests as Api } from "../apiRequests";

function fetchUsersAction(page) {
    return dispatch => {
        dispatch(fetchPending());
        Api.getAllUsers(page)
            .then(res => {
                if (res.error) {
                    throw(res.error)
                }
                console.log(res.data.data)
                dispatch(fetchUsersSucces(res.data, res.total))
                return res.data.data;
            })
            .catch(error => {
                dispatch(fetchError(error));
            })
    }
}

export default fetchUsersAction;