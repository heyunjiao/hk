<template>
  <div class="FormCombination" ref="echartsWrapper">
    <div class="d-flex justify-space-between">
      <div class="w-100">
        <el-form :model="dynamicValidateForm" :inline="true" ref="dynamicValidateForm" @submit.native.prevent
                 label-position="left"
                 class="demo-dynamic form1" :class="formObj.formproperties.classname" style="float:left;width:100%">
          <el-row :gutter="10">
            <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="domain.colSpan ? domain.colSpan : 4"
                    v-for="(domain, index) in dynamicValidateForm.domains"
                    v-show="domain.category == 7 ? false : true" :key="index">
              <div class="grid-content bg-purple w-100">
                <el-form-item class=""
                              :class="domain.classnameitem"
                              :prop="domain.check ? ('domains.' + index + '.value') : ''"
                              :rules="domain.check ? {required: true, message: $t(domain.message), trigger: 'blur'} : {}"
                >

                  <div slot="label" class="d-flex w-100" style="height: 44px;" v-if="domain.hidelabels">
                    <p class="label-title">{{ domain.hidelabels ? ($t(domain.label)) : '' }}</p>
                    <el-tooltip class="item" effect="dark" placement="top-start" v-if="domain.hidelabels">
                      <div slot="content">
                        <p>{{ domain.hidelabels ? ($t(domain.label)) : '' }}</p>
                      </div>
                      <div class="d-flex flex-column justify-center">
                        <i class="el-icon-info" style="cursor: pointer;"></i>
                      </div>
                    </el-tooltip>
                  </div>
                  <el-input v-model="domain.value" :type="domain.type" class="input-box"
                            :placeholder="$t(domain.placeholder)"
                            :class="domain.classname"
                            @keyup.enter.native="submit(domain, index,dynamicValidateForm.domains)"
                            @blur="getInputValue(domain, index)" @keyup.native="getInputKeyUp(domain, index)"
                            @change="getInputKeyUp(domain, index)" :disabled="domain.disabled" clearable
                            v-if="domain.category == 0">
                    <template>
                      <el-button slot="append" icon="el-icon-search"
                                 @click="submit(domain, index,dynamicValidateForm.domains)"
                                 v-if="domain.iconChekc"></el-button>
                    </template>
                  </el-input>
                  <el-select v-model="domain.value" clearable :placeholder="$t(domain.placeholder)"
                             :class="domain.classname" filterable
                             @change="((val)=>{selectChange(val,domain,index)})"
                             :disabled="domain.disabled" :multiple="domain.multiplechoice" v-if="domain.category == 1"
                             class="w-100">
                    <el-option
                        v-for="(v, index) in domain.options"
                        :key="index"
                        :disabled="v.disabled"
                        :label="$t(v.label)"
                        :value="v.value">
                    </el-option>
                  </el-select>
                  <div v-if="domain.category == 2"
                       :class="domain.layoutmode == 0 ? '' : domain.layoutmode == 1 ? 'd-flex flex-column' : ''">
                    <el-radio v-model="domain.value" style="margin-bottom: 15px;" :disabled="v.disabled"
                              :class="domain.classname" @input="((val)=>{selectChange(val,domain,index)})"
                              @change="getInputKeyUp(domain, index)"
                              v-for="(v, index) in domain.options" :label="$t(v.value)" :key="index">
                      {{ $t(v.label) }}
                    </el-radio>
                  </div>
                  <div v-if="domain.category == 3"
                       :class="domain.layoutmode == 0 ? '' : domain.layoutmode == 1 ? 'd-flex flex-column' : ''">
                    <el-checkbox-group v-model="domain.value" @change="getInputKeyUp(domain, index)"
                                       :class="domain.classname">
                      <el-checkbox v-for="(v, index) in domain.options" :label="v.value" :disabled="v.disabled"
                                   :key="index">{{ $t(v.label) }}
                      </el-checkbox>
                    </el-checkbox-group>
                  </div>
                  <div v-if="domain.category == 4" style="" class="picker-box">
                    <el-time-picker class="w-100" :class="domain.classname" :disabled="domain.disabled"
                                    @change="getInputKeyUp(domain, index)"
                                    v-model="domain.value" v-if="domain.category == 4"
                                    :placeholder="$t(domain.placeholder)">
                    </el-time-picker>
                  </div>
                  <div class="picker-box" v-if="domain.category == 5">
                    <el-date-picker class="w-100 mt-0" @change="getInputKeyUp(domain, index)"
                                    v-model="domain.value"
                                    :type="domain.type || 'date'" clearable
                                    :range-separator="$t('range-separator')"
                                    :start-placeholder="$t('start-placeholder')"
                                    :end-placeholder="$t('end-placeholder')"
                                    :format="domain.format"
                                    :value-format="domain.format"
                                    :placeholder="$t(domain.placeholder)">
                    </el-date-picker>
                  </div>
                  <el-switch v-if="domain.category == 6"
                             v-model="domain.value" @change="getInputKeyUp(domain, index)"
                             :active-color="domain.activecolor || '#13ce66'"
                             :inactive-color="domain.inactivecolor || '#ff4949'">
                  </el-switch>
                  <div v-if="domain.category == 8" class="d-flex flex-column" style="position: relative;">
                    <div style="height: 40px;" v-if="domain.hidelabels"></div>
                    <el-button :icon="domain.icon" :size="domain.size" :class="domain.type"
                               @click="leftBtn(domain, index, dynamicValidateForm.domains)">{{ $t(domain.value) }}
                    </el-button>
                  </div>
                  <div v-else-if="domain.category == 'cascader'" class="w-100">
                    <el-cascader class="w-100"
                                 v-model="domain.value"
                                 :options="domain.options"
                                 @change="handleChange"></el-cascader>
                  </div>
                </el-form-item>
              </div>
            </el-col>
            <div class="float-right">
              <el-col class="d-flex">
                <div class="grid-content bg-purple btn-box Botton" v-for="(domain, index) in formButtom" :key="index">
                  <!-- 多语言设置按钮 -->
                  <div class="" style="display: flex;align-items: baseline;" v-if="domain.customParameters == 'multilingualSelect'  && domain.status">
                    <div style="margin-right: 20px"><span style="font-size: 14px;font-weight: 400;color: #606266;">{{ $t('app.sellanguage') }}</span></div>
                    <div>
                      <div style="height: 44px;" v-if="domain.hidelabels"></div>
                      <el-select v-model="domain.value"
                                 :placeholder="$t(domain.placeholder)"
                                 :class="domain.type" filterable
                                 @change="((val)=>{selectChange(val,domain,index)})"
                                 class="w-100" style="width: 140px !important;">
                        <el-option
                            v-for="(v, index) in domain.options"
                            :key="index"
                            :disabled="v.disabled"
                            :label="$t(v.label)"
                            :value="v.value">
                        </el-option>
                      </el-select>
                    </div>
                    <div style="margin-right: -10px; margin-left: 10px">
                      <el-button class="Other-btn" @click.stop="multilingualClick(domain,'multilingual-sub')">{{ $t('Submit') }}</el-button>
                      <el-button class="Other-btn" @click.stop="multilingualClick(domain,'multilingual-cancel')">{{ $t('Cancel') }}</el-button>
                    </div>
                  </div>
                  <div class="" style="" v-if="domain.customParameters == 'multilingual' && domain.status">
                    <div style="height: 44px;" v-if="domain.hidelabels"></div>
                    <el-button :icon="domain.icon" :size="domain.size" :class="domain.type"
                               @click="leftBtn(domain, index, dynamicValidateForm.domains)">{{ $t(domain.value) }}
                    </el-button>
                  </div>
                  <!-- 多语言设置按钮 end -->
                  <div class="" style="" v-if="!['multilingualSelect','multilingual'].includes(domain.customParameters)">
                    <div style="height: 44px;" v-if="domain.hidelabels"></div>
                    <el-button class="iconfont" :icon="domain.icon" :size="domain.size" :class="domain.type"
                               @click="leftBtn(domain, index, dynamicValidateForm.domains)">{{ $t(domain.value) }}
                    </el-button>
                  </div>
                </div>
              </el-col>

            </div>
          </el-row>
        </el-form>
        <!--        <div style="float:right;">
                  <button data-v-0304b196="" type="button" class="el-button el-button&#45;&#45;default Search-btn">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;<span>搜索 </span>
                  </button>
                  <button data-v-0304b196="" type="button" class="el-button el-button&#45;&#45;default Search-btn">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;<span>搜索 </span>
                  </button>
                </div>-->
      </div>
      <div class="d-flex Botton" style="">
        <el-button v-for="(v, index) in buttom" class="h-100 iconfont" :class="v.type" :icon="v.icon" :size="v.size"
                   @click="rightBtn(v, index, buttom)" :key="index">{{ $t(v.value) }}
        </el-button>
      </div>
    </div>
    <div class="label-box">
      <p class="label-tip" v-for="(v, index) in newtabData" :key="index">{{ $t(v.label) }}： {{ $t(v.value) }}
        <span
            class="el-icon-close" @click="closebtn(v, index)"></span></p>
    </div>
  </div>
</template>

<script>
import '@/config/ele/elementForm';
import '@/config/ele/Layout';

export default {
  name: "FormCombination",
  props: ['formObj', 'handelSubmit', 'status', 'getValue', 'tabData', 'tabClose', 'language_val'],
  watch: {
    status: function () {
      this.dynamicValidateForm.domains = this.formObj.formData;
      this.buttom = this.formObj.buttom;
    },
    tabData(New) {
      this.newtabData = New;
      this.dynamicValidateForm.domains = this.formObj.formData;
    },
    dynamicValidateForm() {
      this.getData();
    },
  },
  data() {
    return {
      dynamicValidateForm: {
        domains: []
      },
      newtabData: [],
      buttom: [],
      formButtom: [],
      submitText: '',
    }
  },
  created() {
    let delBtn = [];
    this.newtabData = this.tabData
    /* this.formObj.formData.forEach((f) => {
       f.classnameitem = '';
     })*/
    this.dynamicValidateForm.domains = this.formObj.formData;
    let domains = this.dynamicValidateForm.domains;
    this.formObj.formData.forEach((f, index) => {
      if (f.category == 7) {
        this.formButtom.push(f);
        delBtn.push(index)
      }
    });
    delBtn.forEach((f) => {
      domains.splice(f, 1);
    });
    this.dynamicValidateForm.domains = domains;
    this.buttom = this.formObj.buttom;
    // this.submitText = this.$route.query.submitText
    this.getData();
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    getData() {
      // this.dynamicValidateForm.domains
      let dynamicValidateForm = this.dynamicValidateForm;
      dynamicValidateForm.domains.forEach((f) => {
        if (f.source == false) {
          /*this.$store.dispatch('getData', {
            data: {},
            url: f.apiUrl,
            item: f,
            returnType: f.returnType,
            returnParameterKey: f.returnParameterKey,
            res: ((response) => {
              f.options = response;
              f.options = response;
            })
          })*/
        }
      })
    },
    closebtn(v, index) {
      this.newtabData.splice(index, 1);
      this.tabClose(this.newtabData, v)
    },
    getInputKeyUp(domain) {
      console.debug(this.dynamicValidateForm.domains, 'this.dynamicValidateForm.domains')
      if (this.dynamicValidateForm.domains.length > 2) {
        let classname = domain.classname;
        let classnameitem = domain.classnameitem;
        classname = classname && classname.replace(/entered/g, "");
        classnameitem = classnameitem && classnameitem.replace(/enteredlabel/g, "");
        if (domain.value) {
          domain.classname = classname + ' entered';
          domain.classnameitem = classnameitem + ' enteredlabel'
        } else {
          domain.classname = classname;
          domain.classnameitem = classnameitem;
        }
      }
    },
    getInputValue(domain, index) {
      this.getInputKeyUp(domain, index)
      if (this.getValue) {
        this.getValue(domain, index)
      }
    },
    selectChange(v, row) {
      console.debug(v, row)
      this.getInputKeyUp(row)
      this.$emit('selectBack', v, row)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    rightBtn(v, index, data) {
      this.submit(v, index, data);
    },
    leftBtn(v, index, data) {
      // console.log(v, index)
      this.submit(v, index, data);
    },
    submit(v, index, data) {
      // domain, index,dynamicValidateForm.domains
      // this.handelSubmit(v, index, this.dynamicValidateForm.domains)
      this.$store.commit('keyValue', {
        data,
        Callback: ((response) => {
          this.handelSubmit(v, index, data, response, this.formButtom)
        })
      });
    },
    multilingualClick(v, t) {
      this.handelSubmit(v, this.formButtom, t)
    },
  },
  mounted() {
  }
}
</script>

<style scoped>
/deep/ .el-form-item__label {
  width: 100%;
  /*overflow: hidden;*/
  /*text-overflow: ellipsis;*/
  /*white-space: nowrap;*/
}

.label-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 10px;
}

.btn-box {
  margin-right: 10px;
}

/deep/ .el-col-xl-4 {
  /*padding-left: 15px !important;*/
  /*padding-right: 15px !important;*/
}

/deep/ .form1 {
  /*display: grid !important;*/
  /*justify-content: space-between !important;*/
  /*grid-template-columns: repeat(auto-fill, 422px) !important;*/
}

/deep/ .el-date-editor.el-input, /deep/ .el-date-editor.el-input__inner {
  width: initial;
}

/deep/ .form-box .el-input__inner {
  border-right: 0 !important;
  border-radius: 10px 0px 0px 10px !important;
}

/deep/ .form-box .input-box button {
  background: none !important;
  border: none !important;
}

/deep/ .form-box .el-input-group__append {
  background: #fff !important;

  border-radius: 0px 10px 10px 0px !important;
}

/deep/ .el-form-item__content {
  display: flex !important;
}

/*最大 400，最小337*/
/deep/ input {
  /*width: 422px !important;*/
  width: 100% !important;
  height: 42px !important;
  background: #FFFFFF !important;
  border-radius: 8px !important;
  border: 1px solid #CCCCCC !important;
}

/deep/ .picker-box {
  /*width: 422px;*/
  width: 100% !important;
  overflow: hidden;
}

/deep/ .el-date-editor--daterange {
  height: 42px !important;
  background: #FFFFFF !important;
  border-radius: 8px !important;
  /*border: 1px solid #CCCCCC !important;*/
  overflow: hidden;
}

/deep/ button {
  height: 42px !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  border-radius: 8px !important;
  border: 1px solid #C5C5C5;
}


/deep/ .picker-box .el-range-input {
  border: none !important;
}

/deep/ .el-form-item {
  margin-bottom: 10px !important;
  width: 100% !important;
  margin-right: 0 !important;
}

/*/deep/ .el-form-item:nth-child(4n) {*/
/*  margin-right: 0 !important;*/
/*}*/

.label-box {
  margin: 16px 0 20px 0;
}

.label-box .label-tip {
  font-size: 14px;
  color: #7EA2E2;
  padding: 4px 9px;
  border-radius: 15px;
  border: 1px solid #7EA2E2;
  display: inline-block;
  margin-right: 22px;
  margin-bottom: 10px;
}

.label-box .label-tip span {
  cursor: pointer;
}

/deep/ .f-btn button {
  position: absolute !important;
  top: 0 !important;
}

/deep/ .el-form-item__label {
  padding: 0 !important;
}

/deep/ .entered .el-input__inner {
  border: 1px solid #133B29 !important;
}

/deep/ .enteredlabel .el-date-editor--daterange {
  border: 1px solid #133B29 !important;
}

/deep/ .enteredlabel .el-input__inner {
  border: 1px solid #133B29 !important;
}

/deep/ .enteredlabel .el-form-item__label {
  font-weight: bold !important;
  color: #333333 !important;
}

/deep/ .el-range-separator {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/deep/ .iconfont {
  margin-right: 5px !important;
}

/deep/ .el-input__prefix {
  /*margin: 20px;*/
  position: absolute;
  height: 100%;
  right: 25px;
  top: 0;
  text-align: center;
  color: #C0C4CC;
  transition: all 0.3s;
  pointer-events: none;
}

/deep/ .el-input__prefix .el-input__icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-0%, -50%);
}

/deep/ .el-icon-date {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-0%, -50%);
}

/deep/ .el-input-group__append, /deep/ .el-input-group__prepend {
  border: 1px solid #cccccc;
  border-left: 0;
}


/deep/ .Botton button i {
  font-size: 16px !important;
}
.iconfont::before {
    padding-right: 5px;
}
</style>
