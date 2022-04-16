import { get, post } from '@utils/request'

export const getData = params => {
    return get('/api/data', params);
}
export const getDataOne = params => {
    return post('/api/data', params);
}