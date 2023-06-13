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
const yesOrNo= [{"value": 1, "label": "是", "disabled": false}, {
  "value": 2,
  "label": "否",
  "disabled": false
}]
  export default {
    projectType,
    coach,
    apponitStatus,
    apponitMethod,
    yesOrNo,
    classType,
    sexType
  }