import {
    FETCH_ERROR,
    FETCH_PENDING,
    FETCH_USERS_STATISTIC_SUCCESS,
    FETCH_USERS_SUCCESS,
    FETCH_USER_BY_ID,
    FETCH_STATISTIC_ONE_USER
} from "../constants";

export function fetchPending() {
    return{
        type: FETCH_PENDING
    }
}
export function fetchUsersSucces(users, total) {
    return {
        type: FETCH_USERS_SUCCESS,
        users,
        total
    }
}
export function fetchUsersStatisticSucces(statistic) {
    return {
        type: FETCH_USERS_STATISTIC_SUCCESS,
        payload: statistic
    }
}

export function fetchUserById(user) {
    return {
        type: FETCH_USER_BY_ID,
        payload: user
    }
}

export function fetchStatisticOneUser(statistic) {
    return {
        type: FETCH_STATISTIC_ONE_USER,
        payload: statistic
    }
}

export function fetchError(error) {
    return {
        type: FETCH_ERROR,
        error: error
    }
}