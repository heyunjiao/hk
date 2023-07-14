import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

const state = {
  routes: [],
  addRoutes: [],
  permissionRoute:[]
}


function formmatPermission(data, roles) {
  console.log( state.permissionRoute,6777777777778968);
  if (data.length > 0) {
    data.forEach((item, index) => {
      if (item.meta && item.meta.roles) {
        if (roles.indexOf(item.meta.roles) != -1||roles.some(i=>item.meta.roles.includes(i)))
        state.permissionRoute.push(item)


        if (item.children && item.children.length > 0) {
          formmatPermission(item.children, roles)
        }

      }


    })
  }
}

function formatPermiRouteFn(data) {
  let temp = []
  data.forEach((cur, index, arr) => {
    if (arr[index].path.includes('/')) {
      const tempArr = arr.filter(i => (i.meta.roles == cur.meta.roles || i.meta.roles.includes(cur.meta.roles)))

      console.log(tempArr);
      return temp.push(tempArr)
    }



  })




console.log(temp);

  temp && temp.forEach((i, ind) => {
    i.forEach((item, index) => {
      if (item.path.includes('/')) {
        const arr=i.filter(it => !it.path.includes('/'))
        
        item.children = arr

      }


    })

  })

  const route = temp.map(i => {

    return i.filter(item =>item.children&& item.children.length>0)[0]

  })
  return route
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}


const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    console.log(roles, 'roles')
    return new Promise(resolve => {
      let accessedRoutes
      state.permissionRoute=[]
      formmatPermission(asyncRoutes, roles)
      console.log(state.permissionRoute, 'permissionRoute');
      accessedRoutes = formatPermiRouteFn(state.permissionRoute)


      console.log(accessedRoutes, 'accessedRoutes');
      
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
