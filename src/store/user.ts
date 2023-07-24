import { defineStore } from 'pinia'
import { encrypt, decrypt } from '@/utils/crypto'

const getInfo = () => {
  try {
    return JSON.parse(decrypt(localStorage.getItem('userInfo')))
  } catch (error) {
    return null
  }
}
const userInfo = getInfo()

export const useUser = defineStore('user', {
  state() {
    return {
      userInfo
    }
  },
  getters: {

  },
  actions: {
    setUserInfo(info) {
      this.userInfo = info
      localStorage.setItem('userInfo', encrypt(JSON.stringify(info)))
    }
  }
})