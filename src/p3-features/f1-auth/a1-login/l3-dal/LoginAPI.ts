import {instance} from "../../../../p2-main/m3-dal/instance";

export const LoginAPI = {
    ping: async () => {
        const response = await instance.post<any>('/ping', {frontTime: new Date().getTime()});

        return response.data;
    },
    login: async (token: string) => {
        const response = await instance.post<any>('/auth/login', {token});

        return response.data;
    },

};
