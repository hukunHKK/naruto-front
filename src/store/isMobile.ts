import { defineStore } from 'pinia'
import isMobile from '@/utils/isMobile'

export const useIsMobile = defineStore('isMobile', {
  state() {
    return {
      isMobile: isMobile()
    }
  },
})