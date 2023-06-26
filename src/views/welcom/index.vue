<template>
  <div>
    <div class="welcom">
      <el-descriptions
        title="hah 您好！"
        column="4"
        labelClassName="welcom-label"
        contentClassName="welcom-content"
      >
     
        <el-descriptions-item :label="$t('useCommonAll.jobNumber')">kooriookami</el-descriptions-item>
        <el-descriptions-item :label="$t('useCommonAll.name')" >hah</el-descriptions-item>
        <el-descriptions-item :label="$t('useCommonAll.sex')" >女</el-descriptions-item>
        <el-descriptions-item :label="$t('useCommonAll.entryStatus')" >是</el-descriptions-item>
        <el-descriptions-item :label="$t('useCommonAll.position')" ><el-tag >管理员</el-tag></el-descriptions-item>
        <el-descriptions-item :label="$t('useCommonAll.phone')" >18877767787</el-descriptions-item>
        <el-descriptions-item :label="$t('useCommonAll.email')" >666@qq.com</el-descriptions-item>
        <el-descriptions-item :label="$t('useCommonAll.birthday')" >1998/09/90</el-descriptions-item>
        <el-descriptions-item :label="$t('useCommonAll.entryTime')" >2002/2/2</el-descriptions-item>
        <el-descriptions-item :label="$t('useCommonAll.functions')" >
        会员管理 订单管理
        </el-descriptions-item>
      </el-descriptions>
    </div>

    <div class="pic">
      <div class="title">向导图</div>

      <div style="width: 100%; display: flex;justify-content: space-around;background:#F5F6F7 ;padding:20px ; ">
        <el-image
                style="width: 240px; height: 200px;"
                :src="require('../../assets/daotu/微信图片_20230626161033.jpg')"
                fit="fill"
                :preview-src-list="srcList"
              >
              </el-image>
        <el-image
                style="width: 240px; height: 200px;"
                :src="require('../../assets/daotu/微信图片_20230626161033.png')"
                fit="fill"
                :preview-src-list="srcList"
              >
              </el-image>
        <el-image
                style="width: 240px; height: 200px;"
                :src="require('../../assets/daotu/微信图片_202306261610331.jpg')"
                fit="fill"
                :preview-src-list="srcList"
              >
              </el-image>
        <el-image
                style="width: 240px; height: 200px;"
                :src="require('../../assets/daotu/微信图片_202306261610331.png')"
                fit="fill"
                :preview-src-list="srcList"
              >
              </el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        srcList: [
          require('../../assets/daotu/微信图片_20230626161033.jpg'),
          require('../../assets/daotu/微信图片_20230626161033.png'),
          require('../../assets/daotu/微信图片_202306261610331.jpg'),
          require('../../assets/daotu/微信图片_202306261610331.png'),
         
        ]
    };
  },
};
</script>

<style lang="scss">
.welcom{
    .el-descriptions__body{
background: none;
}

.el-descriptions--medium:not(.is-bordered) .el-descriptions-item__cell {

padding-bottom: 20px;}
}

.welcom {
  padding: 20px;
  background:url('../../assets/daotu/welcomBgc.png');
  .welcom-label {
    color: #666;
  }
  .welcom-label {
    color: #666;
  }
  .welcom-content{
    color: #000;
    font-weight: 600;
}
}

.pic {
  padding: 20px;
  margin-top: 15px;
//   height: 200px;
  background-color: #fff;
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>
