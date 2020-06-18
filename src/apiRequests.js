import axios from 'axios';

const DEFAULT_ADDRESS = "http://localhost:9000/api"

export const Requests =  {
     getAllUsers(page) {
          return axios.get(`${DEFAULT_ADDRESS}/users?page=${page}&limit=50`)
     },
     getStatisticUsers() {
          return axios.get(`${DEFAULT_ADDRESS}/users/statistic`)
     },
     getUserById(id) {
          return axios.get(`${DEFAULT_ADDRESS}/user?id=${id}`)
     },
     getStatisticOneUser(id) {
          return axios.get(`${DEFAULT_ADDRESS}/statistic/user?id=${id}`)
     }
};

