export default {
  route: {
    demo:'demo',
    dashboard: 'Dashboard',
    documentation: 'Documentation',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    rolePermission: 'Role Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: 'Mixin',
    backToTop: 'Back To Top',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    mergeHeader: 'Merge Header',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link',
    profile: 'Profile',
    memberManage:'Member Management',
    memberList:'Member List',
    appointeManage:'Appointe Manage',
    appointeList:'Appointe Manage List',
    orderManage:'Order Manage',
    AddOrder:"New order",
    clubManage:'Club management',
    room:'room Management',
    addRoom:'New Room',
    class:'class Management',
    account:'Personal Center',
    staff:'staff Management',
    accountingManage:'accounting management'

  },
  member:{
    username:'User Name',
    sex:'Gender',
    contactInfo:'Contact Information',
    birthday:'Birthday',
    address:"Address",
    allergy:'Allergy',
    tel:'cell-phone number',
    cardType:'Card Category',
    masterCard:'Master Card',
    secondaryCard:'Secondary Card',
    youngCard:'Young Card',
    openCard:'activate a bank card',
    preferred:"preferred",
    male:'male',
    female:'female',
    remark:'remark',
    basicInfo:'User Basic Info',
    accountInfo:'Account Information',
    MembershFipFee:'MembershFip Fee',
    annualFee:'Annual Fee' ,
    MonthlyFees:'Monthly administrative fees',
    chooseMasterCard:'Select Master Card'
  },
  appointeManage:{
    openAppoint:'New Appointment'
  },
  navbar: {
    dashboard: 'Dashboard',
    github: 'Github',
    logOut: 'Log Out',
    profile: 'Profile',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    addRole: 'New Role',
    editPermission: 'Edit',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  example: {
    warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name (default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name (default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading PDF.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo'
  },
  commen: {
    'demo.form.title': 'title',
    'title': 'title',
    'Sign up a New Ticket': 'Sign up a New Ticket',
    'Add purchase order': 'Add purchase order',
    'brand': 'brand',
    'brandMessage': 'Please enter',
    'Option 1': 'Option 1',
    'Option 2': 'Option 2',
    'Please select': 'Please select',
    'Supplier classification': 'Supplier classification',
    'mode of transportation': 'mode of transportation',
    'Time selector': 'Time selector',
    'Date Pickers': 'Date Pickers',
    'range-separator': 'to',
    'start-placeholder': 'start time',
    'end-placeholder': 'end time',
    'switch': 'switch',
    'submit': 'Submit',
    'reset': 'reset',
    'Operation': 'Operation',
    'Batch Approval': 'Batch Approval',
    'collape': 'Collape',
    'number': 'NO',
    'demo.page.test': 'demo.page.test',
    'demo.page.approve': 'Approve',
    'demo.page.Refuse': 'Refuse',
    'demo.page.singleLineTextBox': 'Single line text box',
    'demo.page.name': 'name',
    'demo.page.id': 'ID',
    'page.demo.icon': 'icon',
    'page.demo.valueInputBox': 'value input box',
    'page.demo.localDropDownBox': 'Local drop-down box',
    'page.demo.apiDropDownBox': 'Drop Down Box',
    'page.demo.timeSelection': 'Time selection',
    'page.demo.dateSelection': 'Date selection',
    'page.demo.dateRangeSelection': 'Date Range Selection',
    'page.demo.approvalStatus': 'Approval status',
    'page.demo.workshop': 'Workshop',
    'page.demo.section': 'Section',
    'page.demo.enable': 'Enable',
    'page.demo.sort': 'Sort',
    'page.demo.updateTime': 'Update time',
    'page.demo.email': 'Email',
    'page.demo.determine': 'determine',
    'page.demo.preservation': 'Save',
    'page.demo.saveAndAdd': 'Save and Add',
    'page.demo.name': 'name',
    'page.demo.power': 'power',
    'page.demo.equipmentType': 'Equipment type',
    'page.demo.SpinningCart': 'Spinning cart',
    'page.demo.workingProcedure': 'working procedure',
    'page.demo.batchProcessing': 'Batch processing',
    'page.demo.fuzzySearch': 'Fuzzy search',
    'page.demo.add': 'Add',
    'page.demo.submit': 'submit',
}
}
