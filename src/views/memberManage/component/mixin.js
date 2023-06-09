let userMixin={
    data(){
    return{
        
          formObj: {
            title: "member.basicInfo" /*表单标题*/,
            formDisabled:false,
            formproperties: {
              inline: true,
              // "width": "100%",  /*表单宽度*/
              // "labelalignment": "top",  /*标题展示位置 top， left， righr*/
              // "formlabelwidth": "120px",  /*标题宽度*/
              // "classname": "",  /*自定义class*/
            },
            formData: [
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "会员号码",
                value: "4567890987544455665" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
             
              // {
              //   // 单行文本框
              //   id: "btn",
              //   span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
              //   label: "激活",
              //   disabled:false,
              //   value: "" /*控件value / 默认值*/,
              //   type: "primary" /*控件类型 支持原生*/,
              //   hidelabels: false /*是否展示label*/ /*是否展示label标题*/,
              //   classname: "" /*自定义class*/,
              //   message: "brandMessage" /*校验提示语*/,
              
              //   placeholder: "brandMessage" /*提示语*/,
              //   category: 18 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
              //   clickFn:this.statusFn
              // },
             
              {
                id: "email",
                span: 12,
                assemblyname: "email",
                label: "member.username",
                value: "",
                type: "",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: true,
                placeholder: "brandMessage",
                category: 17,
                check: true,
                iconChekc: false,
                customParameters: "email",
                inputSelectValue: "头衔/称谓",
                inputSelectOptions: [
                  {
                    label: "身份证",
                    value: "1",
                  },
                  {
                    label: "护照",
                    value: "2",
                  },
                ],
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "国籍",
                value: "China" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: true /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
    
              {
                id: "email",
                span: 12,
                assemblyname: "email",
                label: "证件信息",
                value: "",
                type: "",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: true,
                placeholder: "brandMessage",
                category: 17,
                check: true,
                iconChekc: false,
                customParameters: "email",
                inputSelectValue: "证件类型",
                inputSelectOptions: [
                  {
                    label: "身份证",
                    value: "1",
                  },
                  {
                    label: "护照",
                    value: "2",
                  },
                ],
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "电子邮箱",
                value: "jiaofaery@198.com" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: true /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
              {
                // 下拉框
                id: "select",
                span: 12,
                assemblyname: "下拉框",
                label: "member.sex",
                value: 1,
                type: "",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "Please select",
                category: 1,
                source: true,
                apiUrl: "",
                key: "",
                val: "",
                check: false,
                multiplechoice: false,
                searchable: false,
                formStatus: true,
                options: [
                  { value: 1, label: "member.male" },
                  {
                    value: 2,
                    label: "member.female",
                  },
                ],
                customParameters: "select",
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "手机号码",
                value: "177888989988" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: true /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
              {
                // 时间选选择器
                id: "dateSelection",
                span: 12,
                assemblyname: "",
                label: "member.birthday",
                value: "",
                type: "date",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "Please select",
                category: 5,
                check: false,
                format: "yyyy-MM-dd",
                customParameters: "dateSelection",
                formStatus: true,
              },
              
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "公司名称",
                value: "上海某某公司" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "职业",
                value: "办公人员" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
    
             
              {
                // 多行文本框
                id: "textarea",
                span: 24,
                assemblyname: "多行文本框",
                label: "公司地址",
                value: "上海市杨浦区XXXX",
                type: "textarea",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "brandMessage",
                category: 0,
                check: false,
                iconChekc: false,
                customParameters: "textarea",
                formStatus: true,
              },
              {
                // 多行文本框
                id: "textarea",
                span: 24,
                assemblyname: "多行文本框",
                label: "住宅地址",
                value: "上海市杨浦区XXXX",
                type: "textarea",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "brandMessage",
                category: 0,
                check: false,
                iconChekc: false,
                customParameters: "textarea",
                formStatus: true,
              },
              {
                // 多行文本框
                id: "textarea",
                span: 24,
                assemblyname: "多行文本框",
                label: "邮寄地址",
                value: "上海市杨浦区XXXX",
                type: "textarea",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "brandMessage",
                category: 0,
                check: false,
                iconChekc: false,
                customParameters: "textarea",
                formStatus: true,
              },
            ],
          },
          formObj2: {
            title: "member.accountInfo" /*表单标题*/,
            formDisabled:false,

            formproperties: {
              inline: true,
          
            },
            formData: [
              {
                // 下拉框
                id: "select",
                span: 12,
                assemblyname: "下拉框",
                label: "member.cardType",
                value: "",
                type: "",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "Please select",
                category: 1,
                source: true,
                apiUrl: "",
                key: "",
                val: "",
                check: true,
                multiplechoice: false,
                searchable: false,
                formStatus: true,
                customParameters: "masterCard",
                options: [
                  { value: 1, label: "member.masterCard" },
                  {
                    value: 2,
                    label: "member.secondaryCard",
                  },
                  {
                    value: 3,
                    label: "member.youngCard",
                  },
                ],
              },
              {
                // 多选框组
                id: "Checkbox",
                span: 24,
                assemblyname: "多选框组",
                label: "permission.roles",
                value: [],
                type: "",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                placeholder: "Please select",
                category: 3,
                source: false,
                check: true,
                layoutmode: 0,
                formStatus: true,
    
                options: [
                  { value: 1, label: "预约课程", disabled: false },
                  {
                    value: 2,
                    label: "店内消费",
                    disabled: true,
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
                ],
                customParameters: "Checkbox",
              },
            ],
          },
          formObj3: {
            title: "个人信息" /*表单标题*/,
            formDisabled:false,

            formproperties: {
              inline: true,
              // "width": "100%",  /*表单宽度*/
              // "labelalignment": "top",  /*标题展示位置 top， left， righr*/
              // "formlabelwidth": "120px",  /*标题宽度*/
              // "classname": "",  /*自定义class*/
            },
            formData: [
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "member.allergy",
                value: "芒果" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "其他偏好",
                value: "上海某某公司" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
    
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "member.preferred",
                value: "11" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
            ],
          },
          formObj4: {
            title: "秘书信息" /*表单标题*/,
            formDisabled:false,

            formproperties: {
              inline: true,
              // "width": "100%",  /*表单宽度*/
              // "labelalignment": "top",  /*标题展示位置 top， left， righr*/
              // "formlabelwidth": "120px",  /*标题宽度*/
              // "classname": "",  /*自定义class*/
            },
            formData: [
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "姓名",
                value: "jiaofaery@198.com" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: true /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "电子邮箱",
                value: "jiaofaery@198.com" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: true /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "电话",
                value: "jiaofaery@198.com" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: true /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
              { // 多选框组
                "id": 'Checkbox',
                "span": 12,
                "assemblyname": "多选框组",
                "label": "优先联系秘书",
                "value": [],
                "type": "",
                "hidelabels": true,
                "classname": "",
                "message": "brandMessage",
                "placeholder": "Please select",
                "category": 3,
                "source": false,
                "check": false,
                "layoutmode": 0,
                "formStatus": true,
                "options": [{"value": 1, "label": "是", "disabled": false}, {
                  "value": 2,
                  "label": "否",
                 
                }],
                "customParameters": "Checkbox"
              },
    
              {
                // 多行文本框
                id: "textarea",
                span: 24,
                assemblyname: "多行文本框",
                label: "邮寄地址",
                value: "上海市杨浦区XXXX",
                type: "textarea",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "brandMessage",
                category: 0,
                check: false,
                iconChekc: false,
                customParameters: "textarea",
                formStatus: true,
              },
            ],
          },
          formObj5: {
            title: "其他信息" /*表单标题*/,
            formDisabled:false,

            formproperties: {
              inline: true,
            },
            formData: [
              {
                // 多行文本框
                id: "textarea",
                span: 24,
                assemblyname: "多行文本框",
                label: "备注",
                value: "哈哈哈哈哈",
                type: "textarea",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "brandMessage",
                category: 0,
                check: false,
                iconChekc: false,
                customParameters: "textarea",
                formStatus: true,
              },
            ],
          },

    }},
    methods:{
    statusFn(value){
    console.log(value,888);
    this.formObj.formData[1].label='停用'

    }
    }
}
export default userMixin