import request from './request'

export const login = (p) => request.post('/user/login', p)