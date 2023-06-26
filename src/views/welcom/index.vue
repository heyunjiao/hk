<template>
  <div>
    <div class="welcom">
      <el-descriptions
        title="hah 您好！"
        column="4"
        labelClassName="welcom-label"
        contentClassName="welcom-content"
      >
        <el-descriptions-item label="工号">kooriookami</el-descriptions-item>
        <el-descriptions-item label="姓名">hah</el-descriptions-item>
        <el-descriptions-item label="性别">女</el-descriptions-item>
        <el-descriptions-item label="在职状态">是</el-descriptions-item>
        <el-descriptions-item label="职位">管理员</el-descriptions-item>
        <el-descriptions-item label="电话">18877767787</el-descriptions-item>
        <el-descriptions-item label="电子邮箱">666@qq.com</el-descriptions-item>
        <el-descriptions-item label="出生日期">1998/09/90</el-descriptions-item>
        <el-descriptions-item label="入职时间">2002/2/2</el-descriptions-item>
        <el-descriptions-item label="权限">
        会员管理 订单管理
        </el-descriptions-item>
      </el-descriptions>
    </div>

    <div class="pic">
      <div class="title">向导图</div>

      <div>
        <el-steps :active="3">
          <el-step
            title="步骤 1"
            description="这是一段很长很长很长的描述性文字"
          >
            <template slot="description">
              <el-image
                style="width: 240px; height: 200px;"
                :src="require('../../assets/daotu/微信图片_20230626161033.jpg')"
                fit="fill"
                :preview-src-list="srcList"
              >
              </el-image>
            </template>
          </el-step>
          <el-step
            title="步骤 2"
            description="这是一段很长很长很长的描述性文字"
          >
            <template slot="description">
              <el-image
                style="width: 240px; height: 200px;"
                :src="require('../../assets/daotu/微信图片_20230626161033.jpg')"
                :preview-src-list="srcList"

              >
              </el-image>
            </template>
          </el-step>
          <el-step
            title="步骤 3"
            description="这是一段很长很长很长的描述性文字"
          >
            <template slot="description">
              <el-image
                style="width: 240px; height: 200px;"
                :src="require('../../assets/daotu/微信图片_20230626161033.jpg')"
                :preview-src-list="srcList"

              >
              </el-image>
            </template>
          </el-step>
          <el-step
            title="步骤 4"
            description="这是一段很长很长很长的描述性文字"
          >
            <template slot="description">
              <el-image
                style="width: 240px; height: 200px;"
                :src="require('../../assets/daotu/微信图片_20230626161033.jpg')"
                :preview-src-list="srcList"

              >
              </el-image>
            </template>
          </el-step>
          
        </el-steps>
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
         
        ]
    };
  },
};
</script>

<style lang="scss">
.welcom {
  padding: 20px;
  background: #fff;
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
