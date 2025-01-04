import { AxiosResponse } from "axios"

export interface Response {
    response: AxiosResponse<any, any>
    info?: {
        time: number
    }
}