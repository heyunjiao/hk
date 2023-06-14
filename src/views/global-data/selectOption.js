// 项目类型
const  cardType=[
   {
    value: 1,
    label: "成人会籍卡（主卡）",
    disabled: false,
  },
  {
    value: 2 ,
    label: "成人会籍卡（附属卡）",
    disabled: false ,
  },
  {
    value: 3 ,
    label: "青少年会籍卡",
    disabled: false ,
  },
]
// 头衔/称谓
const  nickNameType=[
  {
    label: "男爵",
    value: "1",
  },
  {
    label: "子爵",
    value: "2",
  },
  {
    label: "侯爵",
    value: "3",
  },
  {
    label: "公爵",
    value: "4",
  },
  {
    label: "伯爵",
    value: "5",
  },
]
// 证件类型
const documentType=[  {
  label: "身份证",
  value: "1",
},
{
  label: "护照",
  value: "2",
},]
// 账户权限
const accountAuth=[
  { value: 1, label: "预约课程", disabled: false },
  {
    value: 2,
    label: "店内消费",
  },
  {
    value: 3,
    label: "线上消费",
  },
  {
    value: 4,
    label: "运动项目",
  },
  {
    value: 5,
    label: "会籍转让",
  },
]
// 项目类型
const  projectType=[
   {
    value: 1,
    label: "拉丁",
    disabled: false,
  },
  {
    value: 2 ,
    label: "高尔夫",
    disabled: false ,
  },
  {
    value: 3 ,
    label: "乒乓球",
    disabled: false ,
  },
  {
    value: 4 ,
    label: "理疗",
    disabled: false ,
  },
  {
    value: 5 ,
    label: "餐饮",
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
  label: "微信",
  disabled: false ,
},{
  value: 3 ,
  label: "现场",
  disabled: false ,
}]

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
]



// 是否 的下拉或者checkbox
const yesOrNo= [
  {"value": 1, 
  "label": "是",
   "disabled": false
  },
   {
  "value": 2,
  "label": "否",
  "disabled": false
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
  { value: 1, label: "纪念品" },
  {
    value: 2,
    label: "课时包",
  },
  {
    value: 3,
    label: "其他商品",
  },
]
// 支付状态
const payStatus=[ { value: 1, label: "已支付" },
{
  value: 2,
  label: "未支付",
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
    payStatus
  }