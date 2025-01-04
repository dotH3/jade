import axios, { AxiosResponse } from "axios";

interface Props {
    url: string,
    method: string
    body?: object
}
export const sendRequest = async ({ url, method, body }: Props): Promise<AxiosResponse<any, any>> => {
    try {
        const response = await axios({
            url,
            method
        });
        return response
    } catch (error: any) {
        console.error('Error making request:', error);
        // throw error;
        return error.response
    }
}