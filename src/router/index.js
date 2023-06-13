import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/memberManage',
    alwaysShow: true, // will always show the root menu
    name: 'memberManage',
    meta: {
      title: 'memberManage',
      icon: 'dashboard',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'memberList',
        component: () => import('@/views/memberManage/memberList'),
        name: 'memberList',
        meta: { title: 'memberList', icon: 'lock', affix: true }
      },
      // 创建会员卡
      {
        path: 'openCard',
        component: () => import('@/views/memberManage/component/openCard'),
        hidden:true
      },
      
      
    ]
  },
 
  {
    path: '/appointmentManage',
    component: Layout,
    redirect: '/appointmentManage/index',
    alwaysShow: true, // will always show the root menu
    name: 'appointmentManage',
    meta: {
      title: 'appointeManage',
      icon: 'guide',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/appointmentManage/index'),
        name: 'PagePermission',
        meta: {
          title: 'appointeList',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      // 创建预约
      {
        path: 'openAppoint',
        component: () => import('@/views/appointmentManage/component/openAppoint'),
        hidden:true
      },
      
      
      
    ]
  },
  {
    path: '/orderManage',
    component: Layout,
    redirect: '/orderManage/index',
    alwaysShow: true, // will always show the root menu
    name: 'orderManage',
    meta: {
      title: 'orderManage',
      icon: 'guide',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/orderManage/index'),
        name: 'orderManage',
        meta: {
          title: 'orderManage',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'AddOrder',
        component: () => import('@/views/orderManage/component/AddOrder'),
        name: 'AddOrder',
        hidden:true,
        meta: {
          title: 'AddOrder',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
    ]
  },
  // 项目管理
  {
    path: '/clubManage',
    component: Layout,
    redirect: '/clubManage/room',
    alwaysShow: true, // will always show the root menu
    name: 'clubManage',
    meta: {
      title: 'clubManage',
      icon: 'guide',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
     
      {
        path: 'room',
        component: () => import('@/views/clubManage/room'),
        name: 'room',
        meta: {
          title: 'room',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'addRoom',
        component: () => import('@/views/clubManage/addRoom'),
        name: 'addRoom',
        hidden:true,
        meta: {
          title: 'addRoom',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'class',
        component: () => import('@/views/clubManage/class'),
        name: 'class',
        meta: {
          title: 'class',
          roles: ['admin'] // or you can only set roles in sub nav
        }

      },
      {
        path: 'addClass',
        component: () => import('@/views/clubManage/addClass'),
        name: 'addClass',
        hidden:true,
        meta: {
          title: 'addClass',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
    ]
  },
  // 个人中心
  {
    path: '/account',
    component: Layout,
    redirect: '/account/personInfo',
    alwaysShow: true, // will always show the root menu
    name: 'account',
    meta: {
      title: 'account',
      icon: 'guide',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
     
      {
        path: 'personInfo',
        component: () => import('@/views/account/personInfo'),
        name: 'personInfo',
        meta: {
          title: 'accountInfo',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'accountNumber',
        component: () => import('@/views/account/accountNumber'),
        name: 'accountNumber',
        meta: {
          title: 'accountNumber',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      
    ]
  },
  // 财务管理
  // {
  //   path: '/accountingManage ',
  //   component: Layout,
  //   redirect: '/accountingManage/index',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'accountingManage',
  //   meta: {
  //     title: 'accountingManage',
  //     icon: 'guide',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
     
  //     {
  //       path: 'setting',
  //       component: () => import('@/views/accountingManage/index'),
  //       name: 'setting',
  //       meta: {
  //         title: 'accountingManage',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
      
  //   ]
  // },
  // 员工管理
  {
    path: '/staff',
    component: Layout,
    redirect: '/staff/index',
    alwaysShow: true, // will always show the root menu
    name: 'staff',
    meta: {
      title: 'staff',
      icon: 'guide',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
     
      {
        path: 'setting',
        component: () => import('@/views/staffManage/staffList'),
        name: 'setting',
        meta: {
          title: '成员管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'nameplate',
        component: () => import('@/views/staffManage/nameplate'),
        name: 'setting',
        meta: {
          title: '铭牌管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'roleManage',
        component: () => import('@/views/staffManage/roleManage'),
        name: 'setting',
        meta: {
          title: '角色管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'use',
        component: () => import('@/views/staffManage/useManage'),
        name: 'useManage',
        meta: {
          title: '功能管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      
    ]
  },
  {
    path: '/demo',
    component: Layout,
    redirect: '/demo/index',
    alwaysShow: true, // will always show the root menu
    name: 'demo',
    meta: {
      title: 'demo',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'demo',
        component: () => import('@/views/demo/index'),
        name: 'PagePermission',
        meta: {
          title: 'demo',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'demoForm',
        component: () => import('@/views/demo/demoForm'),
        name: 'PagePermission',
        meta: {
          title: 'demo',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      
    ]
  },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/profile',
  //   component: Layout,
  //   redirect: '/profile/index',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/profile/index'),
  //       name: 'Profile',
  //       meta: { title: 'profile', icon: 'user', noCache: true }
  //     }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'rolePermission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },

  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },

  /** when your routing map is too long, you can split it into small modules **/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'example',
  //     icon: 'el-icon-s-help'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'createArticle', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'editArticle', noCache: true, activeMenu: '/example/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'articleList', icon: 'list' }
  //     }
  //   ]
  // },

  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: 'tab', icon: 'tab' }
  //     }
  //   ]
  // },

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/error-page/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/error-page/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },

  // {
  //   path: '/error-log',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/error-log/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'errorLog', icon: 'bug' }
  //     }
  //   ]
  // },

  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/export-excel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'exportExcel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/select-excel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'selectExcel' }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import('@/views/excel/merge-header'),
  //       name: 'MergeHeader',
  //       meta: { title: 'mergeHeader' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/upload-excel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'uploadExcel' }
  //     }
  //   ]
  // },

  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   name: 'Zip',
  //   meta: { title: 'zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'exportZip' }
  //     }
  //   ]
  // },

  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'pdf', icon: 'pdf' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },

  // {
  //   path: '/theme',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'theme', icon: 'theme' }
  //     }
  //   ]
  // },

  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'clipboardDemo', icon: 'clipboard' }
  //     }
  //   ]
  // },

  // {
  //   path: '/i18n',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/i18n-demo/index'),
  //       name: 'I18n',
  //       meta: { title: 'i18n', icon: 'international' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
