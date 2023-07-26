import request from './request'

export const getAllUser = () => request.get('/user/getAll')
export const updateWebsitePermission = (p) => request.post('/user/websitePermission/update', p)