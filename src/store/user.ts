import { defineStore } from 'pinia'
import { decrypt } from '@/utils/crypto'

const getInfo = () => {
  try {
    const authorization = localStorage.getItem('userInfo')
    const userInfo = decrypt(authorization)
    return {
      userInfo,
      authorization
    }
  } catch (error) {
    console.log(error);
    return {
      userInfo: null,
      authorization: null
    }
  }
}
const { userInfo, authorization } = getInfo()

export const useUser = defineStore('user', {
  state() {
    return {
      userInfo,
      authorization
    }
  },
  getters: {

  },
  actions: {
    setUserInfo(info) {
      this.userInfo = decrypt(info)
      this.authorization = info
      localStorage.setItem('userInfo', info)
    }
  }
})