import axios, { AxiosResponse } from "axios";
import { Response } from "../interfaces/Response";

interface Props {
    url: string,
    method: string
    body?: string
}



export const sendRequest = async ({ url, method, body }: Props): Promise<Response> => {
    const startTime = Date.now();
    try {
        const response = await axios({
            url,
            method,
            data: body
        });
        const endTime = Date.now();
        const time = endTime - startTime;
        return { response, info: { time } }

    } catch (error: any) {
        const endTime = Date.now();
        console.error('Error making request:', error);
        const time = endTime - startTime;
        return { response: error.response, info: { time } }
    }
}
