// 项目类型
const cardType = [
  {
    value: 1,
    label: "useCommonAll.familyCardAll",
    disabled: false,
  },
  {
    value: 8,
    label: "useCommonAll.familyCardPerson",
    disabled: false,
  },
  {
    value: 4,
    label: "useCommonAll.familyCardCompany",
    disabled: false,
  },
  {
    value: 2,
    label: "useCommonAll.familyCardSub",
    disabled: false,
  },
  {
    value: 5,
    label: "useCommonAll.youngCardAll",
    disabled: false,
  },
  {
    value: 6,
    label: "useCommonAll.youngCardOne",
    disabled: false,
  },
  {
    value: 7,
    label: "useCommonAll.youngCardTwo",
    disabled: false,
  },

]
// 头衔/称谓
const nickNameType = [
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
const documentType = [{
  label: "useCommonAll.identityCard",
  value: "1",
},
{
  label: "useCommonAll.passport",
  value: "3",
}, {
  label: "useCommonAll.other",
  value: "4",
}]
// 账户权限
const accountAuth = [
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
const projectType = [
  {
    value: 1,
    label: "useCommonAll.tableTennis",
    disabled: false,
  },
  {
    value: 2,
    label: "useCommonAll.golf",
    disabled: false,
  },
  {
    value: 3,
    label: "useCommonAll.dinning",
    disabled: false,
  },
  {
    value: 4,
    label: "useCommonAll.dance",
    disabled: false,
  },
  {
    value: 5,
    label: "useCommonAll.spa",
    disabled: false,
  },
]

// 教练
const coach = [
  {
    value: 1,
    label: "Carry",
    disabled: false,
  },
  {
    value: 2,
    label: "Honey",
    disabled: false,
  },
  {
    value: 3,
    label: "Emali",
    disabled: false,
  },
  {
    value: 4,
    label: "HELLY",
    disabled: false,
  },
  {
    value: 5,
    label: "GOLD",
    disabled: false,
  },
]
// 预约订单状态
const apponitStatus = [{
  value: 1,
  label: "useCommonAll.confirme",
  disabled: false,
},
{
  value: 2,
  label: "useCommonAll.checked",
  disabled: false,
},
{
  value: 3,
  label: "useCommonAll.canceled",
  disabled: false,
},]
// 预约方式
const apponitMethod = [{
  value: 1,
  label: "useCommonAll.phone",
  disabled: false,
},
{
  value: 2,
  label: "useCommonAll.mail",
  disabled: false,
},
{
  value: 3,
  label: "useCommonAll.wechat",
  disabled: false,
}, {
  value: 3,
  label: "useCommonAll.live",
  disabled: false,
}]
const orderType = [
  {
    value: 1,
    label: "useCommonAll.reservationOrder",
    disabled: false,
  },
  {
    value: 2,
    label: "useCommonAll.classPackageOrder",
    disabled: false,
  },
  {
    value: 3,
    label: "useCommonAll.merchandiseOrder",
    disabled: false,
  },
  {
    value: 4,
    label: "useCommonAll.cateringOrder",
    disabled: false,
  },
  {
    value: 5,
    label: "useCommonAll.penaltyOrder",
    disabled: false,
  },
  
]
const classType = [{
  value: 1,
  label: "useCommonAll.singleLesson",
  disabled: false,
},
{
  value: 2,
  label: "useCommonAll.package",
  disabled: false,
},
{
  value: 3,
  label: "useCommonAll.monthlyFee",
  disabled: false,
}]
const sexType = [{
  value: 1,
  label: "useCommonAll.male",
  disabled: false,
},
{
  value: 2,
  label: "useCommonAll.female",
  disabled: false,
},
{
  value: 3,
  label: "useCommonAll.other",
  disabled: false,
},
]



// 是否 的下拉或者checkbox
const yesOrNo = [
  {
    "value": 1,
    "label": "useCommonAll.yes",
    "disabled": false
  },
  {
    "value": 2,
    "label": "useCommonAll.no",
    "disabled": false
  }]
// 会籍
const membershipyesOrNo = [
  {
    "value": 1,
    "label": "useCommonAll.yes",
    "disabled": true
  },
  {
    "value": 2,
    "label": "useCommonAll.no",
    "disabled": true
  }]
// 核销状态
const writeOff = [
  { value: 1, label: "useCommonAll.checkedOff" },
  {
    value: 2,
    label: "useCommonAll.uncheck",
  },
]
// 商品分类
const shopList = [
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
    label: "useCommonAll.fine",
  },
  {
    value: 6,
    label: "useCommonAll.commodityType",
  },
  {
    value: 3,
    label: "useCommonAll.otherCommodity",
  },
]
// 支付状态
const payStatus = [{ value: 1, label: "useCommonAll.payed" },
{
  value: 2,
  label: "useCommonAll.unpay",
},
{
  value: 3,
  label: "useCommonAll.canceled",
},]

// 支付方式

const payMethods = [{ value: 1, label: "POS" },
{
  value: 2,
  label: "useCommonAll.inlineConsume",
},
]

const orderStatus = [{ value: 1, label: "useCommonAll.completed" },
{
  value: 2,
  label: "useCommonAll.incomplete",
},]

const room = [{ value: 1, label: "room1" },
{
  value: 2,
  label: "room2",
},]
// 邮寄方式
const billMode = [
  { value: 1, label: "useCommonAll.email", "disabled": true },
//  { value: 2, label: "useCommonAll.paperMode" },
]
// 房间单位
const roomUint=[
  { value: 1, label: "useCommonAll.roomUnitMin"},
  { value: 2, label: "useCommonAll.roomUnitHour"},
  { value: 3, label: "useCommonAll.roomUintDay"},
  { value: 4, label: "useCommonAll.roomUnitWeek"},
  { value: 5, label: "useCommonAll.roomUnitMonth"},
]



const roomStatus=[ { value: 1, label: "useCommonAll.roomNormal" }, { value: 2, label: "useCommonAll.roomMaintenance" }, { value: 3, label: "useCommonAll.roomDisable" }]


// 在职状态
const entryStatusList=[{ value: 1, label: "在职" },{ value: 2, label: "离职" }]
// 角色
const positionList=[ {
  value: 1,
  label: "useCommonAll.receptionStaff",
  disabled: false,
},
{
  value: 2,
  label: "useCommonAll.restaurantStaff",
},
{
  value: 3,
  label: "useCommonAll.coach",
},
{
  value: 4,
  label: "useCommonAll.finance",
},
{
  value: 5,
  label: "useCommonAll.supervisor",
},
{
  value: 6,
  label: "useCommonAll.administrator",
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
  room,
  billMode,
  roomStatus,
  roomUint,
  entryStatusList,
  positionList
  
}