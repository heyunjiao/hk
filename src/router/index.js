import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/welcom',
    hidden: true,
    meta: {},
    children: [
      {
        path: 'welcom',
        component: () => import('@/views/welcom/index'),
        name: 'welcom',
        meta: { title: 'welcom', icon: 'user' }
      }

    ]
  },

  // {
  //   path: '/demo',
  //   component: Layout,
  //   redirect: '/demo/index',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'demo',
  //   hidden: true,
  //   meta: {
  //     title: 'demo',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'demo',
  //       component: () => import('@/views/demo/index'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'demo',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'demoForm',
  //       component: () => import('@/views/demo/demoForm'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'demo',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     }

  //   ]
  // },

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
  }
]

export const asyncRoutes = [
  {
    path: '/memberManage',
    component: Layout,
    name:'memberManage',
    meta: {

      icon: 'user',
      roles: 'sc_customer' // you can set roles in root nav
    },
    children: [
      {
        path: 'memberManage',
        component: () => import('@/views/memberManage/memberList'),
        name: 'memberList',
        meta: {
          title: 'memberManage',
          roles: 'sc_customer'
        }
      },
      // 创建会员卡
      {
        path: 'openCard',
        component: () => import('@/views/memberManage/component/openCard'),
        hidden: true,
        name:'openCard',
        meta: {
          roles: 'sc_customer'
        }
      }

    ]
  },

  {
    path: '/appointmentManage',
    component: Layout,
    name:"appointmentManage",
    meta: {
      icon: 'el-icon-date',
      title: 'reservationManage',
      roles: 'sc_booking',
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/appointmentManage/index'),
        name: 'reservationManage',
        meta: {
          icon: 'el-icon-date',
          title: 'reservationManage',
          roles: 'sc_booking',
        }
      },
      // 创建预约
      {
        path: 'openAppoint',
        component: () => import('@/views/appointmentManage/component/openAppoint'),
        hidden: true,
        name:'openAppoint',
        meta: {
          title: 'createreservation',
          roles: 'sc_booking',
        }
      },
      {
        path: 'batchopenAppoint',
        component: () => import('@/views/appointmentManage/component/batchopenAppoint'),
        hidden: true,
        name:"batchopenAppoint",
        meta: {
          title: 'createreservation',
          roles: 'sc_booking',
        }

      }

    ]
  },
  {
    path: '/orderManage',
    component: Layout,
name:'orderManage',
    meta: {
      icon: 'el-icon-document',
      title: 'orderManage',
      roles: 'sc_order' // you can set roles in root nav
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/orderManage/index'),
        name: 'orderManage1',
        meta: {
          roles: 'sc_order',
          title: 'orderManage',
        }
      },
      {
        path: 'AddOrder',
        component: () => import('@/views/orderManage/component/AddOrder'),
        name: 'AddOrder',
        hidden: true,
        meta: {
          roles: 'sc_order',
          title: 'createOrder',
        }
      }
    ]
  },
  // 员工管理
  {
    path: '/staff',
    component: Layout,
    name:"staff",
    meta: {
      title: 'staffManagement',
      icon: 'el-icon-s-tools', // staff
      roles: 'sc_employee' // you can set roles in root nav
    },
    children: [

      {
        path: 'staffList',
        component: () => import('@/views/staffManage/staffList'),
        name: 'staffList',
        meta: {
          title: 'staffManagement',
          roles: 'sc_employee' // or you can only set roles in sub nav
        }
      },
      {
        path: 'addStaff',
        component: () => import('@/views/staffManage/addStaff'),
        name: 'addStaff',
        hidden: true,
        meta: {
          title: 'newMember',
          roles: 'sc_employee' // or you can only set roles in sub nav
        }
      },
      {
        path: 'editStaff',
        component: () => import('@/views/staffManage/addStaff'),
        name: 'editStaff',
        hidden: true,
        meta: {
          title: 'editStaff',
          roles: 'sc_employee' // or you can only set roles in sub nav
        }
      },
      {
        path: 'detailStaff',
        component: () => import('@/views/staffManage/addStaff'),
        name: 'detailStaff',
        hidden: true,
        meta: {
          title: 'staffDetail',
          roles: 'sc_employee' // or you can only set roles in sub nav
        }
      }
      // {
      //   path: 'nameplate',
      //   component: () => import('@/views/staffManage/nameplate'),
      //   name: 'setting',
      //   meta: {
      //     title: '铭牌管理',
      //     roles: ['admin'] // or you can only set roles in sub nav
      //   }
      // },
      // {
      //   path: 'roleManage',
      //   component: () => import('@/views/staffManage/roleManage'),
      //   name: 'setting',
      //   meta: {
      //     title: '角色管理',
      //     roles: ['admin'] // or you can only set roles in sub nav
      //   }
      // },
      // {
      //   path: 'addRole',
      //   component: () => import('@/views/staffManage/addRole'),
      //   name: 'setting',
      //   hidden:true,
      //   meta: {
      //     title: '新建角色',
      //     roles: ['admin'] // or you can only set roles in sub nav
      //   }
      // },
      // {
      //   path: 'use',
      //   component: () => import('@/views/staffManage/useManage'),
      //   name: 'useManage',
      //   meta: {
      //     title: '功能管理',
      //     roles: ['admin'] // or you can only set roles in sub nav
      //   }
      // },

    ]
  },
  // 项目管理
  {
    path: '/clubManage',
    component: Layout,
name:'clubManage',
    meta: {
      title: 'clubManage',
      icon: 'el-icon-s-shop',
      roles: 'sc_club'// you can set roles in root nav
    },
    children: [

      {
        path: 'room',
        component: () => import('@/views/clubManage/room'),
        name: 'room',
        meta: {
          title: 'roomManage',
          roles: 'sc_club_room sc_club' // or you can only set roles in sub nav
        }
      },
      {
        path: 'addRoom',
        component: () => import('@/views/clubManage/addRoom'),
        name: 'addRoom',
        hidden: true,
        meta: {
          title: 'addRoom',
          roles: 'sc_club_room sc_club' // or you can only set roles in sub nav
        }
      },
      {
        path: 'class',
        component: () => import('@/views/clubManage/class'),
        name: 'class',
        meta: {
          title: 'packageManage',
          roles: 'sc_club_class sc_club' // or you can only set roles in sub nav
        }

      },
      {
        path: 'addClass',
        component: () => import('@/views/clubManage/addClass'),
        name: 'addClass',
        hidden: true,
        meta: {
          title: 'addClass',
          roles: 'sc_club_class sc_club' // or you can only set roles in sub nav
        }
      }
    ]
  },
  
  // 个人中心
  {
    path: '/account',
    component: Layout,
name:'account',
    meta: {
      title: 'personalCenter',
      icon: 'person',
      roles: 'sc_personal' // you can set roles in root nav
    },
    children: [

      {
        path: 'personInfo',
        component: () => import('@/views/account/personInfo'),
        name: 'personInfo',
        meta: {
          title: 'personalInfo',
          roles: 'sc_personal_info sc_personal' // or you can only set roles in sub nav
        }
      },
      {
        path: 'accountNumber',
        component: () => import('@/views/account/accountNumber'),
        name: 'accountNumber',
        meta: {
          title: 'accountManage',
          roles: 'sc_personal_account sc_personal' // or you can only set roles in sub nav
        }
      }

    ]
  },
  // 核销管理
  {
    path: '/accountingManage',
    component: Layout,
name:'accountingManage',
    meta: { roles: 'sc_settlement'},
    children: [
      {
        path: 'setting',
        component: () => import('@/views/accountingManage/index'),
        name: 'setting',
        meta: {
          icon: 'moneyMenu',
          title: 'financialManage',
          roles: 'sc_settlement' // or you can only set roles in sub nav
        }
      }

    ]
  },

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
