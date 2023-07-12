import request from './request'

export const getWebsite = () => request.get('/shareWebsite/get')
export const addWebsite = (p) => request.post('/shareWebsite/add', p)
export const delWebsite = (p) => request.post('/shareWebsite/del', p)