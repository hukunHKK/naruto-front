import request from './request'

export const login = (p) => request.post('/user/login', p)
export const loginCode = (p) => request.post('/user/login/code', p)