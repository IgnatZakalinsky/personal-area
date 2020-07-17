import axios from "axios";
import {BACK_URL} from "../../p0-config/config";

export const instance = axios.create({
    baseURL: BACK_URL,
});
