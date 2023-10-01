import axios from 'axios'

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5e06781fd3914a68b8f598e0a278c52e"
    }
})


