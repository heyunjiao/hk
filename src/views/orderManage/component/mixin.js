import selectOption from "@/views/global-data/selectOption";

let userMixin={
    data(){
    return{
        
          formObj: {
            title: "订单信息" /*表单标题*/,
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
                label: "useCommonAll.orderNumber",
                value: "" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: true /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
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
                label: "useCommonAll.commodityType",
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
                check: true,
                multiplechoice: false,
                searchable: false,
                formStatus: true,
                options: selectOption.shopList,
                customParameters: "select",
              },
             
             
              {
                // 单行文本框
                id: "input",
                span: 9 /*表单占据控件，容器分为 24份，需要整数*/,
                assemblyname: "input",
                label: "useCommonAll.orderAmount",
                value: "" /*控件value / 默认值*/,
                type: "" /*控件类型 支持原生*/,
                hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
                classname: "" /*自定义class*/,
                message: "brandMessage" /*校验提示语*/,
                disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
                placeholder: "brandMessage" /*提示语*/,
                category: 14 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
                check: true /*是否校验*/,
                iconChekc: false /*是否展示icon*/,
                customParameters: "input" /*对应api的参数名称*/,
              },
              {
                // 下拉框
                id: "select",
                span: 8,
                assemblyname: "下拉框",
                label: "useCommonAll.payMethod",
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
                check: true,
                multiplechoice: false,
                searchable: false,
                formStatus: true,
                options:selectOption.payMethods,
                customParameters: "select",
              },
             
             
              {
                // 下拉框
                id: "select",
                span: 7,
                assemblyname: "下拉框",
                label: "useCommonAll.payStatus",
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
                check: true,
                multiplechoice: false,
                searchable: false,
                formStatus: true,
                options:selectOption.payStatus,
                customParameters: "select",
              },
             
              
              {
                // 下拉框
                id: "select",
                span:24,
                assemblyname: "下拉框",
                label: "useCommonAll.commodityContent",
                value: 1,
                type: "textarea",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "",
                category: 0,
                source: true,
                apiUrl: "",
                key: "",
                val: "",
                check: true,
                multiplechoice: false,
                searchable: false,
                formStatus: true,
                customParameters: "select",
              },
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