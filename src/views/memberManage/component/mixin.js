
import selectOption from "@/views/global-data/selectOption";
const cardTypeList=JSON.parse(localStorage.getItem('cardTypeList'))

let userMixin={
    data(){
    return{
      
          formObj: {
            profilePictureUrl: "",
            title: "useCommonAll.foundationInfo" /*表单标题*/,
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
                label: "useCommonAll.head",
                value: "",
                type: "textarea",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "brandMessage",
                category: 'upload',
                check: true,
                iconChekc: false,
                accept:'.png,.jpeg',
                customParameters: "profilePictureUrl",
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.memberNumber",
                value: "01" /*控件value / 默认值*/,
                type: "number" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: this.disableFiled /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: true /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "number" /*对应api的参数名称*/,
              },
              {
                id: "",
                span: 12,
                assemblyname: "",
                label: "useCommonAll.memberName",
                value: '45435',
                type: "",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: true,
                placeholder: "brandMessage",
                category: 17,
                check: true,
                iconChekc: false,
                customParameters: "name",
                inputSelectValue: "",
                inputSelectOptions: selectOption.nickNameType,
              },
              
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.nationality",
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
                customParameters: "nation" /*对应api的参数名称*/,
              },
    
              {
                id: "email",
                span: 12,
                assemblyname: "email",
                label: "useCommonAll.documentInfo",
                value: "",
             
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: true,
                placeholder: "brandMessage",
                category: 17,
                check: true,
                iconChekc: false,
                customParameters: "credentialsNum",
                inputSelectValue: "1",
                inputSelectOptions:selectOption.documentType,
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.email",
                value: "jiaofaery@198.com" /*控件value / 默认值*/,
                type: "email",
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: true /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "email" /*对应api的参数名称*/,
                rule:{
                  type:'email',
                  // pattern:'/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/',
                  message:'formatNotrue'
                }
              },
              {
                // 下拉框
                id: "select",
                span: 12,
                assemblyname: "下拉框",
                label: "useCommonAll.sex",
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
                options:  selectOption.sexType,
                customParameters: "gender",
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.phone",
                value: "643636" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 'countryCode' /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                countryCode:852,
                check: true /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "contactPhone" /*对应api的参数名称*/,
              },
             
              {
                // 时间选选择器
                id: "dateSelection",
                span: 12,
                assemblyname: "",
                label: "useCommonAll.birthday",
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
                customParameters: "birthday",
                formStatus: true,
              },
              
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.conmpanyName",
                value: "gggg" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "company" /*对应api的参数名称*/,
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.companyPosition",
                value: "hhh" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "position" /*对应api的参数名称*/,
              },
              {
                // 多行文本框
                id: "textarea",
                span: 24,
                assemblyname: "多行文本框",
                label: "useCommonAll.emailAddress",
                value: "54646",
                type: "textarea",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "brandMessage",
                category: 0,
                check: true,
                iconChekc: false,
                customParameters: "mailingAddress",
                formStatus: true,
              },
             
              {
                // 多行文本框
                id: "textarea",
                span: 24,
                assemblyname: "多行文本框",
                label: "useCommonAll.companyAddress",
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
                customParameters: "companyAddress",
                formStatus: true,
              },
              {
                // 多行文本框
                id: "textarea",
                span: 24,
                assemblyname: "多行文本框",
                label: "useCommonAll.address",
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
                customParameters: "homeAddress",
                formStatus: true,
              },
             
             
             
             
            ],
          },
          formObj2: {
            title: "useCommonAll.accountInfo" /*表单标题*/,
            formDisabled:false,

            formproperties: {
              inline: true,
              formlabelwidth:'130px'
            },
            formData: [
              {
                // 下拉框
                id: "select",
                span: 12,
                assemblyname: "下拉框",
                label: "useCommonAll.memberCardType",
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
                customParameters: "memberCardID",
                options:cardTypeList
              },
              {
                // 多选框组
                id: "Checkbox",
                span: 24,
                assemblyname: "多选框组",
                label: "useCommonAll.permissionTtem",
                value: [],
                disabled: true,
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
                options: selectOption.accountAuth,
                customParameters: "auth",
              },
              {
                // 多选框组
                id: "Checkbox",
                span: 24,
                assemblyname: "",
                label: "useCommonAll.memberTransfer",
                value: false,
                type: "",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                placeholder: "Please select",
                category: 2,
                source: false,
                check: false,
                layoutmode: 0,
                formStatus: true,
                options: selectOption.membershipyesOrNo,
                customParameters: "isTransfer",
              },
              {
                // 多选框组
                id: "Checkbox",
                span: 24,
                assemblyname: "",
                label: "useCommonAll.billMode",
                value: [1],
                type: "",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                placeholder: "Please select",
                category: 3,
                source: false,
                check: true,
                layoutmode: 0,
                options: selectOption.billMode,
                customParameters: "sendType",
              },
            ],
          },
          formObj3: {
            title: "useCommonAll.otherPreference" /*表单标题*/,
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
                label: "useCommonAll.allergic",
                value: "" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "allergy" /*对应api的参数名称*/,
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.otherPreference",
                value: "" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "preference" /*对应api的参数名称*/,
              },
    
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.hobby",
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
                customParameters: "hobby" /*对应api的参数名称*/,
              },
            ],
          },
          formObj4: {
            title: "useCommonAll.secretaryInfo" /*表单标题*/,
            formDisabled:false,

            formproperties: {
              inline: true,
            
            },
            formData: [
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.name",
                value: "" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "secName" /*对应api的参数名称*/,
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.email",
                value: "" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "secEmail" /*对应api的参数名称*/,
                rule:{
                  type:'email',
                  // pattern:'/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/',
                  message:'formatNotrue'
                }
              },
              {
                // 单行文本框
                id: "input",
                span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.phone",
                value: "" /*控件value / 默认值*/,
                type: "number" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: false /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "secContactPhone" /*对应api的参数名称*/,
              },
              { // 多选框组
                "id": 'Checkbox',
                "span": 12,
                "assemblyname": "多选框组",
                "label": "useCommonAll.contactSecretary",
                "value": null,
                "type": "",
                "hidelabels": true,
                "classname": "",
                "message": "brandMessage",
                "placeholder": "Please select",
                "category": 2,
                "source": false,
                "check": false,
                "layoutmode": 0,
                "formStatus": true,
                "options": selectOption.yesOrNo,
                "customParameters": "isFirst"
              },
    
              {
                // 多行文本框
                id: "textarea",
                span: 24,
                assemblyname: "多行文本框",
                label: "useCommonAll.emailAddress",
                value: "",
                type: "textarea",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "brandMessage",
                category: 0,
                check: false,
                iconChekc: false,
                customParameters: "secMailingAddress",
                formStatus: true,
              },
            ],
          },
         
          formObj5: {
            title: "useCommonAll.otherInfo" /*表单标题*/,
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
                label: "useCommonAll.reamark",
                value: "",
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
                customParameters: "remark" /*对应api的参数名称*/,
              },
            ],
          },

    }},
    methods:{
    statusFn(value){
    console.log(value,888);
    this.formObj.formData[1].label='停用'

    },
    realtimeform1(val){
      console.log(val,9999);
    },
    memberStatusChange(v) {
      this.$confirm(this.$t('useCommonAll.isActivate'), this.$t('useCommonAll.prompt'), {
          confirmButtonText: this.$t('useCommonAll.ok'),
          cancelButtonText:  this.$t('useCommonAll.cancel'),
          type: 'warning'
        }).then(() => {
          // v.memberstatus=1
          this.$message({
            type: 'success',
            message:this.$t('useCommonAll.operatorSuciscess') 
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('useCommonAll.canceledOperator') 
          });          
        });
    },
    }
}


export default userMixin