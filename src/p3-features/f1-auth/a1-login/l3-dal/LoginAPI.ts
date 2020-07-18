import {instance} from "../../../../p2-main/m3-dal/instance";

export const LoginAPI = {
    login: async (token: string) => {
        const response = await instance.post<any>('/auth/login', {token});

        return response.data;
    },

};
