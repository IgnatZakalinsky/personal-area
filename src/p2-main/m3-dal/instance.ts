import axios from "axios";
import {BACK_URL} from "../../p0-config/config";

export const instance = axios.create({
    baseURL: BACK_URL,
});

type PingAnswerType = {
    backTime: number
    frontTime: number
    info: string
    ping: number
}

export const MainAPI = {
    ping: async () => {
        const response = await instance.post<PingAnswerType>('/ping', {frontTime: new Date().getTime()});

        return response.data;
    },
};
