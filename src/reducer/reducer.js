import {
    FETCH_PENDING,
    FETCH_ERROR,
    FETCH_USERS_STATISTIC_SUCCESS,
    FETCH_USERS_SUCCESS,
    FETCH_USER_BY_ID,
    FETCH_STATISTIC_ONE_USER
} from "../constants";

const initialState = {
    users: [],
    user: {},
    oneStatistic: [],
    paginationTotal: 0,
    statistic: [],
    pending: false,
    error: null
};

export function reducer(state = initialState, actions) {
    switch (actions.type) {
        case FETCH_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_USERS_SUCCESS:
            return  {
                ...state,
                pending: false,
                users: actions.users
            }
        case FETCH_USERS_STATISTIC_SUCCESS:
            return {
                ...state,
                pending: false,
                statistic: actions.payload
            }
        case FETCH_USER_BY_ID:
            return  {
                ...state,
                pending: false,
                user: actions.payload[0]
            }
        case FETCH_STATISTIC_ONE_USER:
            return {
                ...state,
                pending: false,
                oneStatistic: actions.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                pending: false,
                error: actions.error
            }
        default:
            return state;
    }
}

export const getUsers = (state) => state.users;
export const getUsersPending = (state) => state.pending;
export const getUserStatistic = (state) => state.statistic;
export const getUser = (state) => state.user;
export const getStatisticOneUser = (state) => state.oneStatistic;
export const getUsersError = (state) => state.error;