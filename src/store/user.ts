import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state() {
    return {
      userName: ''
    }
  },
  getters: {
    userInfo: () => JSON.parse(localStorage.getItem('userInfo')!)
  },
  actions: {
    setUserInfo(info) {
      localStorage.setItem('userInfo', JSON.stringify(info))
    }
  }
})