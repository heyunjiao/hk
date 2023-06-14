<template>
  <div class="add-role">
    <div class="mrb_20">
      <Form
        ref="basicInfo"
        :data="formObj"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
      >
        <template v-if="this.query.type==='view'||this.query.type==='edit'">
          <el-form-item label="角色功能">
            <div class="tree">
              <el-tree
                :data="data"
                show-checkbox
                default-expand-all
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps"
              >
              </el-tree>
            </div>
          </el-form-item>
        </template>
      </Form>
    </div>

    <div class="btn-line" v-if="!this.formObj.formDisabled">
      <el-button @click="onSubmitFn" class="Search-btn"
        >{{ $t("page.demo.preservation") }}
      </el-button>
    </div>
  </div>
</template>

<script>
import "@/config/ele/elementForm";
import "@/config/ele/eleLayout";
import { mapState } from "vuex";
import Table from "@/componentsHK/public/Tabel";

import Form from "@/componentsHK/public/Form";
import selectOption from "@/views/global-data/selectOption";
export default {
  components: {
    Form,
    Table,
  },
  data() {
    return {
        query:{},
      numberValidateForm: {},
      data: [
        {
          id: 1,
          label: "会员管理",
          children: [
            {
              id: 4,
              label: "会员列表",
            },
          ],
        },
        {
          id: 2,
          label: "预约管理",
          children: [
            {
              id: 5,
              label: "预约列表",
            },
          ],
        },
        {
          id: 3,
          label: "俱乐部管理",
          children: [
            {
              id: 7,
              label: "房间管理",
            },
            {
              id: 8,
              label: "课程管理",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      formObj: {
        title: "创建角色" /*表单标题*/,
        formDisabled: false,
        formproperties: {
          inline: true,
        },
        formData: [
          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "角色名称",
            value: "维多利亚" /*控件value / 默认值*/,
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
            span: 12,
            assemblyname: "多行文本框",
            label: "角色描述",
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
          {
            // switch开关
            id: "switch",
            span: 12,
            assemblyname: "",
            label: "状态",
            value: "",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            disabled: false,
            placeholder: "Please select",
            category: 6,
            check: true,
            activecolor: "",
            inactivecolor: "",
            customParameters: "switch",
            formStatus: true,
          },
        ],
      },
    };
  },
  created(){
    const {type,data}=this.$route.query
    this.query={...this.query,type,data:JSON.parse(data)}
if(type==='view'){
    this.formObj.formDisabled=true

}
},
  methods: {
    ChangeSubmit(data, obj) {
      // console.debug(data, obj);
      this.obj = obj;
    },
    resetForm() {
      console.debug("重置");
    },
    onSubmitFn() {
      let p1 = this.$refs.basicInfo.validateFormPromis("dynamicValidateForm");
      let p2 = this.$refs.accountInfo.validateFormPromis("dynamicValidateForm");
      Promise.all([p1, p2])
        .then((result) => {
          const form1 = this.getStoreFormValue(this.formObj.formData);
          const form2 = this.getStoreFormValue(this.formObj2.formData);

          console.log(form1, form2, "form");
        })
        .catch((e) => console.log(e));
    },
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes());
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: "二级 2-1",
        },
        {
          id: 9,
          label: "三级 1-1-1",
        },
      ]);
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3]);
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-line {
  text-align: right;
  padding: 15px;
  background-color: #fff;
  /* display: flex;
      flex-direction: column-reverse; */
}

.add-role {
  .tree {
    width: 50%;
    border: 1px solid #ccc;
    padding: 20px;

  }
}
</style>
