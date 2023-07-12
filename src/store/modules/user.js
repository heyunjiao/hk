// import { login, logout, getInfo } from '@/api/user'
import { login, logout, getInfo } from '@/api/login'

import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { GetMemberCardList } from '@/api/member'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  userinfo:{},
  cardTypeList:[]
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_CARDLIST: (state, cardTypeList) => {
    state.cardTypeList = cardTypeList
    localStorage.setItem('cardTypeList',JSON.stringify(cardTypeList))
  },
  SET_USERINFO: (state, userinfo) => {
    state.userinfo = userinfo
    localStorage.setItem('userInfo', JSON.stringify(userinfo))

  }
 
}

const actions = {
  // user login
  login({ commit,dispatch }, userInfo) {
    const { account, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ account: account.trim(), password: password }).then(response => {
        const {result} = response
        commit('SET_USERINFO',result.userInfo)
        
        commit('SET_TOKEN', 'Bearer'+' '+result.accessToken)
        setToken('Bearer'+' '+result.accessToken)

       dispatch ('getCradList')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

    getCradList({commit}){
    GetMemberCardList().then(res=>{
      res.result.forEach(i => {
        i['label']=i.title
        i['value']=i.id
        i['disabled']='false'
      });
      commit('SET_CARDLIST',res.result)
    })
    
    
    },
  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // getInfo(state.token).then(response => {
      //   const { data } = response

      //   if (!data) {
      //     reject('Verification failed, please Login again.')
      //   }

      //   const { roles, name, avatar, introduction } = data

      //   // roles must be a non-empty array
      //   if (!roles || roles.length <= 0) {
      //     reject('getInfo: roles must be a non-null array!')
      //   }

      commit('SET_ROLES', ['admin'])
      // commit('SET_NAME', name)
      // commit('SET_AVATAR', avatar)
      // commit('SET_INTRODUCTION', introduction)
      // resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      // logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()
        localStorage.clear()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      localStorage.clear()
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
