import axios from "axios";
import Config from "../config";

const jokaApi = axios.create({
    baseURL: Config.domain
});

jokaApi.interceptors.request.use(
    async (req) => {
        //any global modification to out going requests should go here
        let token = (localStorage.getItem("rememberme") != 'true') ? sessionStorage.getItem("token") : localStorage.getItem("token");
        req.headers["Authorization"] = `Bearer ${token}`;
        return req;
    },
    (error) => {
        return Promise.reject(error);
    }
);

jokaApi.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        return Promise.reject(err);
    }
);

export default jokaApi;