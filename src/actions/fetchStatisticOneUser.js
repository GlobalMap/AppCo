import {fetchError, fetchPending, fetchStatisticOneUser} from "./actions";
import {Requests as Api} from "../apiRequests";

function fetchStatisticOneUserAction(id) {
    return dispatch => {
        dispatch(fetchPending());
        Api.getStatisticOneUser(id)
            .then(res => {
                if (res.error) {
                    throw(res.error)
                }
                console.log(res.data.data);
                dispatch(fetchStatisticOneUser(res.data.data))
                return res.data.data;
            })
            .catch(error => {
                dispatch(fetchError(error));
            })
    }
}

export default fetchStatisticOneUserAction;