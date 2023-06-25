// 项目类型
const  cardType=[
   {
    value:1 ,
    label: "useCommonAll.familyCardAll",
    disabled: false,
  },
  {
    value: 8 ,
    label: "useCommonAll.familyCardPerson",
    disabled: false ,
  },
  {
    value: 4 ,
    label: "useCommonAll.familyCardCompany",
    disabled: false ,
  },
  {
    value: 2 ,
    label: "useCommonAll.familyCardSub",
    disabled: false ,
  },
  {
    value: 5 ,
    label: "useCommonAll.youngCardAll",
    disabled: false ,
  },
  {
    value: 6 ,
    label: "useCommonAll.youngCardOne",
    disabled: false ,
  },
  {
    value: 7 ,
    label: "useCommonAll.youngCardTwo",
    disabled: false ,
  },
  
]
// 头衔/称谓
const  nickNameType=[
  {
    label: "Mr.",
    value: "1",
  },
  {
    label: "Mrs.",
    value: "2",
  },
  {
    label: "Miss",
    value: "3",
  },
  {
    label: "Ms.",
    value: "4",
  },
]
// 证件类型
const documentType=[  {
  label: "useCommonAll.identityCard",
  value: "1",
},
{
  label: "useCommonAll.passport",
  value: "3",
},{
  label: "useCommonAll.other",
  value: "4",
}]
// 账户权限
const accountAuth=[
  { value: 1, label: "useCommonAll.reservationCourse", disabled: false },
  {
    value: 2,
    label: "useCommonAll.instoreConsume",
  },
  {
    value: 3,
    label: "useCommonAll.inlineConsume",
  },
  {
    value: 4,
    label: "useCommonAll.sportProject",
  },
 
]
// 项目类型
const  projectType=[
   {
    value: 1,
    label: "useCommonAll.tableTennis",
    disabled: false,
  },
  {
    value: 2 ,
    label: "useCommonAll.golf",
    disabled: false ,
  },
  {
    value: 3 ,
    label: "useCommonAll.dinning",
    disabled: false ,
  },
  {
    value: 4 ,
    label: "useCommonAll.dance",
    disabled: false ,
  },
  {
    value: 5 ,
    label: "useCommonAll.spa",
    disabled: false ,
  },
]

// 教练
const coach=[
  {
    value: 1,
    label: "Carry",
    disabled: false,
  },
  {
    value: 2 ,
    label: "Honey",
    disabled: false ,
  },
  {
    value: 3 ,
    label: "Emali",
    disabled: false ,
  },
  {
    value: 4 ,
    label: "HELLY",
    disabled: false ,
  },
  {
    value: 5 ,
    label: "GOLD",
    disabled: false ,
  },
]
// 预约订单状态
const apponitStatus=[{
  value: 1,
  label: "待确认",
  disabled: false,
},
{
  value: 2 ,
  label: "已确认",
  disabled: false ,
},
{
  value: 3 ,
  label: "已取消",
  disabled: false ,
},]
// 预约方式
const apponitMethod=[{
  value: 1,
  label: "电话",
  disabled: false,
},
{
  value: 2 ,
  label: "邮件",
  disabled: false ,
},
{
  value: 3 ,
  label: "微信/WhatsApp",
  disabled: false ,
},{
  value: 3 ,
  label: "现场",
  disabled: false ,
}]
const orderType=[
  { value: 1,
  label: "预约订单",
  disabled: false,},
  { value: 2,
  label: "课时包订单",
  disabled: false,},
  { value: 3,
  label: "商品订单",
  disabled: false,},
  { value: 4,
  label: "餐饮订单",
  disabled: false,},
  { value: 5,
  label: "罚款订单",
  disabled: false,}
]
const classType=[{
  value: 1,
  label: "单节",
  disabled: false,
},
{
  value: 2 ,
  label: "套餐",
  disabled: false ,
},
{
  value: 3 ,
  label: "月费",
  disabled: false ,
}]
const sexType=[{
  value: 1,
  label: "男",
  disabled: false,
},
{
  value: 2 ,
  label: "女",
  disabled: false ,
},
{
  value: 3 ,
  label: "其他",
  disabled: false ,
},
]



// 是否 的下拉或者checkbox
const yesOrNo= [
  {"value": 1, 
  "label": "useCommonAll.yes",
   "disabled": false
  },
   {
  "value": 2,
  "label": "useCommonAll.no",
  "disabled": false
}]
// 会籍
const membershipyesOrNo= [
  {"value": 1, 
  "label": "useCommonAll.yes",
   "disabled": true
  },
   {
  "value": 2,
  "label": "useCommonAll.no",
  "disabled": true
}]
// 核销状态
const writeOff=[
  { value: 1, label: "已核销" },
  {
    value: 2,
    label: "未核销",
  },
]
// 商品分类
const shopList=[
  { value: 1, label: "useCommonAll.souvenir" },
  {
    value: 2,
    label: "useCommonAll.coursePackage",
  },
  {
    value: 4,
    label: "useCommonAll.dinning",
  },
  {
    value: 5,
    label: "罚款",
  },
  {
    value: 3,
    label: "useCommonAll.otherCommodity",
  },
]
// 支付状态
const payStatus=[ { value: 1, label: "useCommonAll.payed" },
{
  value: 2,
  label: "useCommonAll.unpay",
},
{
  value: 3,
  label: "useCommonAll.canceled",
},]

// 支付方式

const payMethods=[ { value: 1, label: "POS" },
{
  value: 2,
  label: "useCommonAll.inlineConsume",
},
]

const orderStatus=[{ value: 1, label: "已完成" },
{
  value: 2,
  label: "未完成",
},]

const room=[{ value: 1, label: "room1" },
{
  value: 2,
  label: "room2",
},]
  export default {
    cardType,
    projectType,
    coach,
    apponitStatus,
    apponitMethod,
    yesOrNo,
    classType,
    sexType,
    nickNameType,
    documentType,
    accountAuth,
    writeOff,
    shopList,
    payStatus,
    payMethods,
    orderStatus,
    membershipyesOrNo,
    orderType,
    room
  }