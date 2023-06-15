// 项目类型
const  cardType=[
   {
    value:1 ,
    label: "家庭卡（全权会籍）",
    disabled: false,
  },
  {
    value: 8 ,
    label: "家庭卡（个人传承会籍）",
    disabled: false ,
  },
  {
    value: 4 ,
    label: "家庭卡（公司/企业会籍）",
    disabled: false ,
  },
  {
    value: 2 ,
    label: "家庭卡（附属卡）",
    disabled: false ,
  },
  {
    value: 5 ,
    label: "青少年卡（全会籍）",
    disabled: false ,
  },
  {
    value: 6 ,
    label: "青少年卡（指定单项运动会籍）",
    disabled: false ,
  },
  {
    value: 7 ,
    label: "青少年卡（指定双项运动会籍）",
    disabled: false ,
  },
  
]
// 头衔/称谓
const  nickNameType=[
  {
    label: "Mrs.",
    value: "1",
  },
  {
    label: "Miss",
    value: "2",
  },
  {
    label: "Sir",
    value: "3",
  },
  {
    label: "Lord",
    value: "4",
  },
  
]
// 证件类型
const documentType=[  {
  label: "香港身份证",
  value: "1",
},
{
  label: "香港永久居民身份证",
  value: "2",
},{
  label: "香港护照",
  value: "3",
},{
  label: "其他",
  value: "4",
}]
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
    label: "乒乓球",
    disabled: false,
  },
  {
    value: 2 ,
    label: "高尔夫",
    disabled: false ,
  },
  {
    value: 3 ,
    label: "餐厅",
    disabled: false ,
  },
  {
    value: 4 ,
    label: "舞蹈",
    disabled: false ,
  },
  {
    value: 5 ,
    label: "理疗室",
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
},
{
  value: 3,
  label: "已取消",
},]

// 支付方式

const payMethods=[ { value: 1, label: "POS" },
{
  value: 2,
  label: "线上",
},
]
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
    payMethods
  }