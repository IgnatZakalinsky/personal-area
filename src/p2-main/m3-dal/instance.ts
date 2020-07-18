import axios from "axios";
import {BACK_URL} from "../../p0-config/config";

export const instance = axios.create({
    baseURL: BACK_URL,
});

export const MainAPI = {
    ping: async () => {
        const response = await instance.post<{
            backTime: number
            frontTime: number
            info: string
            ping: number
        }>('/ping', {frontTime: new Date().getTime()});

        return response.data;
    },
};
