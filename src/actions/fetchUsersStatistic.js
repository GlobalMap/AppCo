import {fetchPending, fetchError, fetchUsersStatisticSucces} from "./actions";
import { Requests as Api } from "../apiRequests";

function fetchUsersStatisticAction() {
    return dispatch => {
        dispatch(fetchPending());
        Api.getStatisticUsers()
            .then(res => {
                if (res.error) {
                    throw(res.error)
                }
                console.log(res.data.data)
                dispatch(fetchUsersStatisticSucces(res.data.data))
                return res.data.data;
            })
            .catch(error => {
                dispatch(fetchError(error));
            })
    }
}

export default fetchUsersStatisticAction;