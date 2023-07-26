import request from './request'

export const getWebsite = () => request.get('/shareWebsite/get')
export const addWebsite = (p) => request.post('/shareWebsite/add', p)
export const delWebsite = (p) => request.post('/shareWebsite/del', p)
export const getRecord = () => request.get('/websiteVisitRecord/get')
export const addRecord = (p) => request.post('/websiteVisitRecord/add', p)