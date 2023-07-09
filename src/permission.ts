import {NavigationGuardWithThis} from 'vue-router'

const userInfo = localStorage.getItem('userInfo')
console.log(userInfo);
const guard:NavigationGuardWithThis<undefined> = (to,from,next)=>{
if(!userInfo){
  if(to.name === 'login'){
    next()
  }else{
    next('/login')
  }
}
}
export default guard