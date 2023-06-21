<template>
  <div class="Form" id="Form">
    <div style="padding: 15px;" v-if="formObj">
      <div class="" style="margin-bottom: 20px;" v-if="formObj.title">
        <PageTitle :title="$t(formObj.title)" :number="formObj.titleIndex">
          <template
            v-if="formObj.pageTitleSlot && formObj.pageTitleSlot.visible"
            slot="btn"
          >
            <el-button
              @click="() => formObj.pageTitleSlot.fn()"
              size="large"
              type="primary"
              >{{ $t(formObj.pageTitleSlot.text) || "按钮" }}</el-button
            >
          </template>
        </PageTitle>
      </div>
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        :label-position="formObj.formproperties.labelalignment || 'left'"
        :label-width="formObj.formproperties.formlabelwidth || '120px'"
        class="demo-dynamic"
        :class="formObj.formproperties.classname"
        :style="'width: ' + formObj.formproperties.width"
        :disabled="formObj.formDisabled"
      >
        <el-row :gutter="24">
          <el-col
            v-for="(domain, index) in dynamicValidateForm.domains"
            :span="Number(domain.span) || 12"
            style="height: 60px;"
            :key="index"
          >
            <!--            :label="domain.hidelabels ? ($t(domain.label)) : ''"-->
            <el-form-item
              class="flex-1"
              v-if="!domain.isHide"
              :prop="
                domain.check
                  ? 'domains.' + index + '.value'
                  : 'domains.' + index + '.value'
              "
              :rules="
                domain.check
                  ? {
                      required: true,
                      message: $t(domain.message),
                      trigger: trigger(domain.category),
                    }
                  : null
              "
            >
              <div slot="label" class="d-flex w-100">
                <p class="label-title">
                  {{ domain.hidelabels ? $t(domain.label) : "" }}
                </p>
                <span
                  style="color: #f56c6c; margin-right: 4px;"
                  v-if="domain.check"
                  >*</span
                >
                <el-tooltip
                  class="item"
                  effect="dark"
                  placement="top-start"
                  v-if="domain.hidelabels"
                >
                  <div slot="content">
                    <p>{{ domain.hidelabels ? $t(domain.label) : "" }}</p>
                  </div>
                  <div class="d-flex flex-column justify-center">
                    <i class="el-icon-info" style="cursor: pointer;"></i>
                  </div>
                </el-tooltip>
              </div>
              <el-input
                v-model="domain.value"
                :type="domain.type"
                :placeholder="$t(domain.placeholder)"
                :class="domain.classname"
                @blur="realtimeform(domain)"
                :disabled="domain.disabled"
                clearable
                v-if="domain.category == 0"
              ></el-input>
              <el-select
                v-model="domain.value"
                clearable
                :placeholder="$t(domain.placeholder)"
                @change="selectChange(domain)"
                :class="domain.classname"
                :disabled="domain.disabled"
                :multiple="domain.multiplechoice"
                v-if="domain.category == 1"
                class="w-100"
              >
                <el-option
                  v-for="(v, index) in domain.options"
                  :key="index"
                  :disabled="v.disabled"
                  :label="$t(v.label)"
                  :value="v.value"
                >
                </el-option>
              </el-select>
              <div
                v-if="domain.category == 2"
                :class="
                  domain.layoutmode == 0
                    ? ''
                    : domain.layoutmode == 1
                    ? 'd-flex flex-column'
                    : ''
                "
              >
                <el-radio
                  v-model="domain.value"
                  style="margin-bottom: 15px;"
                  :disabled="v.disabled"
                  :class="domain.classname"
                  @change="selectChange(domain)"
                  v-for="(v, index) in domain.options"
                  :label="v.value"
                  :key="index"
                >
                  {{ $t(v.label) }}
                </el-radio>
              </div>
              <div
                v-if="domain.category == 3"
                :class="
                  domain.layoutmode == 0
                    ? ''
                    : domain.layoutmode == 1
                    ? 'd-flex flex-column'
                    : ''
                "
              >
                <el-checkbox-group
                  v-model="domain.value"
                  :class="domain.classname"
                >
                  <el-checkbox
                    v-for="(v, index) in domain.options"
                    :label="v.value"
                    :disabled="v.disabled"
                    :key="index"
                    >{{ $t(v.label) }}
                  </el-checkbox>
                </el-checkbox-group>
              </div>
              <el-time-picker
                class="w-100"
                :class="domain.classname"
                :disabled="domain.disabled"
                v-model="domain.value"
                v-if="domain.category == 4"
                @change="realtimeform(domain)"
                :placeholder="$t(domain.placeholder)"
              >
              </el-time-picker>
              <el-date-picker
                v-model="domain.value"
                v-if="domain.category == 5"
                value-format="yyyy-MM-dd"
                :type="domain.type || 'date'"
                clearable
                @change="realtimeform(domain)"
                :range-separator="$t('range-separator')"
                :start-placeholder="$t('start-placeholder')"
                :end-placeholder="$t('end-placeholder')"
                :disabled="domain.disabled"
                :placeholder="$t(domain.placeholder)"
              >
              </el-date-picker>
              <!-- time -->
              <div style="display: flex" :class="domain.classname">

                <el-time-select
                v-if="domain.category == 20"
                placeholder="起始时间"
                v-model="domain.value"
                @change="realtimeform(domain)"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                }"
              >
              </el-time-select>
              <el-time-select
              v-if="domain.category == 21"
                placeholder="结束时间"
                v-model="domain.value"
                @change="realtimeform(domain)"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                  minTime: domain.minTime,
                }"
              >
              </el-time-select>
              </div>
              <el-switch
                v-if="domain.category == 6"
                :disabled="domain.disabled"
                v-model="domain.value"
                @change="realtimeform(domain)"
                :active-color="domain.activecolor || '#123A28'"
                :inactive-color="domain.inactivecolor || '#999'"
              >
              </el-switch>
             <span style="margin-right: 5px;"  v-if="domain.category == 14&&!domain.unit">{{'$'}}</span>
              <el-input-number
                v-if="domain.category == 14"
                v-model="domain.value"
                :disabled="domain.disabled"
                @change="realtimeform(domain)"
                controls-position="right"
                :min="domain.min||0"
                :max="domain.max||10000000"
              ></el-input-number> 
              <span style="margin-left: 5px;"  v-if="domain.category == 14&&domain.unit">{{domain.unit}}</span>
              <el-cascader
                v-if="domain.category == 11"
                v-model="domain.value"
                @change="realtimeform(domain)"
                :options="domain.options"
              ></el-cascader>
              <div
                class="demo-input-suffix upload-load-box"
                v-if="domain.category == 12"
              >
                <el-input
                  :class="domain.classname"
                  clearable
                  @clear="() => clear(domain)"
                  :disabled="domain.disabled"
                  :placeholder="$t(domain.placeholder)"
                  @blur="realtimeform(domain)"
                  v-model="domain.value"
                >
                  <el-upload
                    slot="suffix"
                    :accept="domain.accept"
                    v-if="domain.category == 12"
                    class="upload-demo"
                    ref="upload"
                    :on-change="(file) => handleChange(file, domain)"
                    :show-file-list="false"
                    action=""
                    :auto-upload="false"
                  >
                    <i
                      :class="[
                        'el-input__icon',
                        domain.icon ? domain.icon : 'el-icon-upload',
                      ]"
                      style="
                        color: #133b29;
                        font-size: 20px;
                        margin-right: 5px;
                        cursor: pointer;
                      "
                    ></i>
                  </el-upload>
                </el-input>
              </div>
              <el-input
                :placeholder="$t(domain.placeholder)"
                :disabled="domain.inputIcon"
                v-model="domain.value"
                class="input-with-select"
                v-if="domain.category == 13"
              >
                <el-button
                  slot="append"
                  :icon="domain.inputIcon"
                  @click="editIcon(domain)"
                ></el-button>
              </el-input>
              <el-input
                :placeholder="$t(domain.placeholder)"
                v-model="domain.value"
                class=""
                v-if="domain.category == 15"
              >
                <div slot="append">
                  <!--                                    append prepend -->
                  <el-select
                    v-model="domain.inputSelectValue"
                    slot="append"
                    :placeholder="$t('Please select')"
                    style="width: 130px; display: inline-block;"
                  >
                    <el-option
                      v-for="(v, index) in domain.inputSelectOptions"
                      :label="$t(v.label)"
                      :value="v.value"
                      :key="index"
                    ></el-option>
                  </el-select>
                </div>
              </el-input>
              <el-input
                :placeholder="$t(domain.placeholder)"
                v-model="domain.value"
                class=""
                v-if="domain.category == 17"
              >
                <div slot="prepend">
                  <!--                                    append prepend -->
                  <el-select
                    v-model="domain.inputSelectValue"
                    slot="prepend"
                    :placeholder="$t('Please select')"
                    style="width: 130px; display: inline-block;"
                  >
                    <el-option
                      v-for="(v, index) in domain.inputSelectOptions"
                      :label="$t(v.label)"
                      :value="v.value"
                      :key="index"
                    ></el-option>
                  </el-select>
                </div>
              </el-input>
              <el-select
                v-if="domain.category == 16"
                style="width: 100%;"
                v-model="domain.value"
                filterable
                allow-create
                :multiple="domain.multiplechoice"
                @change="selectChange(domain)"
                default-first-option
                :placeholder="$t('Please select')"
              >
                <el-option
                  v-for="item in domain.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              

              <!-- 区号+手机号选择 -->
              <div style="display: flex;" v-if="domain.category == 'countryCode'">
                <country-code-selector  :countryCode.sync="domain.countryCode"/>
                <el-input
                v-model="domain.value"
                :type="domain.type"
                :placeholder="$t(domain.placeholder)"
                :class="domain.classname"
                @blur="realtimeform(domain)"
                :disabled="domain.disabled"
                clearable
                v-if="domain.category =='countryCode' "
              ></el-input>
              </div>
             
             <!-- 上传图片 -->
             <el-upload
             v-if="domain.category == 'upload'"
              class="avatar-uploader"
              :accept="domain.accept"
              :show-file-list="false"
              :on-change="(file) => handleChangeImage(file, domain)"
              :before-upload="beforeAvatarUpload"
              action=""
                    :auto-upload="false"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
              <!-- <el-button :disabled="domain.disabled" :type="domain.type " @click="btnClick(domain)" v-if="domain.category == 18&&!formObj.formDisabled">{{$t(domain.label)}}</el-button> -->
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label-width="0">
          <slot name="abc" :row="{}"></slot>
        </el-form-item>

        <el-form-item
          class="text-right"
          v-if="dynamicValidateForm.domains.length > 0"
          v-show="!formObj.formproperties.inline"
        >
          <div v-if="saveNew">
            <el-button
              class="Filter-btn"
              @click="resetForm('dynamicValidateForm')"
              >{{ $t(resetText || "Reset") }}
            </el-button>
            <el-button
              class="Search-btn"
              @click="submitForm('dynamicValidateForm', 1)"
              >{{ $t(submitText || "Submit") }}
            </el-button>
          </div>
          <div v-else>
            <el-button
              class="Filter-btn"
              @click="submitForm('dynamicValidateForm', 1)"
              >{{ $t(submitText || "Save") }}
            </el-button>
            <el-button
              class="Search-btn"
              @click="submitForm('dynamicValidateForm', 2)"
              >{{ $t(resetText || "Save and Add") }}
            </el-button>
          </div>
        </el-form-item>

        <slot></slot>
      </el-form>
    </div>
  </div>
</template>

<script>
import "@/config/ele/elementForm";
import "@/config/ele/eleLayout";
import PageTitle from "@/componentsHK/public/PageTitle";
import countryCodeSelector from '@/componentsHK/countrySelect/index'

export default {
  name: "FormComponents",
  props: [
    "data",
    "submit",
    "reset",
    "Change",
    "realTimeForm",
    "resetText",
    "submitText",
    "saveNew",
  ],
  components: { PageTitle,countryCodeSelector },
  data() {
    return {
      imageUrl:'',
      formObj: {},
      dynamicValidateForm: {
        domains: [],
      },
    };
  },
  created() {
    let formObj = this.data;
    this.dynamicValidateForm.domains = formObj.formData;
    this.formObj = formObj;
    this.getData();
  },
  methods: {
    getData() {
      // this.dynamicValidateForm.domains
      let dynamicValidateForm = this.dynamicValidateForm;
      if (dynamicValidateForm.domains) {
        dynamicValidateForm.domains.forEach((f) => {
          if (f.source == false) {
            /*this.$store.dispatch('getData', {
                            data: {}, url: f.apiUrl, item: f, res: ((response) => {
                                f.options = response;
                                f.options = response;
                            })
                        })*/
          }
        });
      }
    },
    trigger(category) {
      if (category == 0||category==='upload') {
        return "blur";
      } else {
        return "change";
      }
    },
    submitForm(formName, status) {
      
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          this.$store.commit("keyValue", {
            data: this.dynamicValidateForm.domains,
            Callback: (response) => {
              this.submit(this.dynamicValidateForm.domains, status, response);
            },
          });
          return "";
          // this.submit(this.dynamicValidateForm.domains, status, {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      if (this.reset) {
        this.reset("");
      }
    },
    selectChange(item) {
      /*change 事件自定义方法*/
      this.realtimeform(item);
      // if (this.Change) {
      //     this.Change(item)
      // }

      if (this.ChangeSubmit) {
        this.$store.commit("keyValue", {
          data: this.dynamicValidateForm.domains,
          Callback: (response) => {
            this.ChangeSubmit(this.dynamicValidateForm.domains, response);
          },
        });
      }
    },
    realtimeform(v) {
      this.Change && this.Change(v);
      this.realTimeForm && this.realTimeForm(this.dynamicValidateForm.domains);
    },
    ClickItem() {
      alert();
    },
    handleChangeImage(file, row) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$set(row, "file", file);
      this.$set(row, "value", file.name);
      this.realtimeform(row)
    },
    handleChange(file, row) {
      this.$set(row, "file", file);
      this.$set(row, "value", file.name);
      console.log(row);
    },
    clear(row) {
      this.$set(row, "file", "");
      this.$set(row, "value", "");
      this.$refs.upload.clearFiles();
    },
    validateForm(params) {
      this.$refs["dynamicValidateForm"].validate((valid) => {
        if (valid) {
          params.call(true);
          return true;
          // this.submit(this.dynamicValidateForm.domains, status, {});
        } else {
          console.log("error submit!!");
          params.call(false);
          return false;
        }
      });
    },
    validateFormPromis(formName) {
      return this.$refs[formName].validate();
    },
    editIcon(domain) {
      this.Change(domain);
    },
    btnClick(value) {
      value && value.clickFn(value);
    },
    handleAvatarSuccess(res, file) {
      console.log(res,file,999);
      // this.imageUrl=res.id
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  
  watch: {
    formObj(New) {
      this.formObj = New;
      this.dynamicValidateForm.domains = New.formData;
      this.getData();
    },
    /* data(New) {
           console.debug(New, 'deep:true')
           let formObj = New
           this.dynamicValidateForm.domains = formObj.formData;
           this.formObj = formObj;
           this.getData();
         },*/
    data: {
      handler(val) {
        let formObj = val;
        this.dynamicValidateForm.domains = formObj.formData;
        this.formObj = formObj;
        //this.getData();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.Form {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 15px;
  overflow: auto;
}

::v-deep .upload-load-box .el-input__suffix-inner {
  display: flex !important;
  flex-direction: row-reverse !important;
}

/deep/ .el-input__inner {
  /*height: 32px !important;*/
  border-radius: 4px !important;
  /*opacity: 0.49 !important;*/
  /*border: 1px solid #979797 !important;*/
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100% !important;
}

.label-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 10px;
}

/deep/
  #Form
  .el-form-item.is-required:not(.is-no-asterisk)
  .el-form-item__label-wrap
  > .el-form-item__label:before,
.el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:after {
  /*content: '*';*/
  /*color: #F56C6C;*/
  /*margin-left: 4px;*/
  /*margin-right: 10px;*/
}
</style>
