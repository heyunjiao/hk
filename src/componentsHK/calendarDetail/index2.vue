<template>
  <div class="dashboard-container">
    <!-- 日历 -->
    <el-calendar v-model="value">
      <template slot="dateCell" slot-scope="{ data }">
        <p :class="data.isSelected ? 'is-selected' : ''" @click="remarkFn(data)">
          {{ data.day.split("-").slice(2).join("-") }}
          {{ data.isSelected ? "✔️" : "" }}
        </p>
        <div
          style="width: 100%;"
          v-for="(item, index) in scheduleData"
          :key="index"
        >
          <!-- 方法一：
            为了避免渲染本应该被隐藏的列表 (比如 v-for="(content, index) in item.content" v-if="item.workingDay.indexOf(data.day) != -1")。
            这种情形下，请将 v-if 移动至容器元素上 (比如 div)。 
        -->
          <div v-if="item.workingDay.indexOf(data.day) != -1">
            <ul
              v-for="(content, index) in tag
                ? item.content.slice(0, 3)
                : item.content"
              :key="index"
            >
              <li
                :class="
                  content.type === 'important' ? 'importantSty' : 'secondarySty'
                "
              >
               <span class="name"> {{ content.notice }}</span> <span class="time">{{ content.type}}</span>
              </li>
            </ul>
            <span
            class="more"
              v-if="item.content.length > 3"
              @click.stop="dialogFormVisible = true"
              >{{ tag ? "查看更多" : "收起" }}</span
            >
          </div>
          <!-- 方法二：
               可以使用 <template> 标签和 v-for 来包装 <li> 元素
        -->
          <!-- <ul v-if="item.workingDay.indexOf(data.day) != -1">
            <template v-for="(content, inde) in item.content">
              <li
                :key="inde"
                :class="
                  content.type === 'important' ? 'importantSty' : 'secondarySty'
                "
              >
                {{ content.notice }}
              </li>
            </template>
          </ul> -->
        </div>
      </template>
    </el-calendar>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      tag: true, // 控制展开收起
      scheduleData: [
        {
          workingDay: "2023-06-19",
          content: [
            {
              notice: "LUCY",
              type: "2:00-3:00 瑜伽课",
            },
            {
              notice: "HONEY",
              type: "4:00-5:00 乒乓球课",
            },
            {
              notice: "HONEY",
              type: "4:00-5:00 乒乓球课",
            },
            {
              notice: "HONEY",
              type: "4:00-5:00 乒乓球课",
            },
            {
              notice: "HONEY",
              type: "4:00-5:00 乒乓球课",
            },
          ],
        },
        {
          workingDay: "2022-04-25",
          content: [
            {
              notice: "这件事很重要很重要",
              type: "important",
            },
            {
              notice: "记得点个赞",
              type: "secondary",
            },
          ],
        },
        {
          workingDay: "2022-05-02",
          content: [
            {
              notice: "记得点个赞",
              type: "important",
            },
          ],
        },
        {
          workingDay: "2022-05-08",
          content: [
            {
              notice: "记得点个赞",
              type: "important",
            },
          ],
        },
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    remarkFn(data) {
        this.dialogFormVisible= true,
      console.log(data,999);
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  .is-selected {
    color: #1989fa;
  }

  p {
    margin: 10px auto;
  }

  ul {
    list-style: none;
    padding: 0;
    li{
    }
  }

  .importantSty {
    color: red;
    .name{
    font-size: 10px;}
    // background-color: rgba(235, 22, 22, 0.5);
  }

  .secondarySty {
    color: tan;
    background-color: rgba(235, 150, 22, 0.5);

    .name{
    font-size: 10px;
    color: #1989fa;
    
}
    .time{
        color: red;
        font-size: 10px;
    }
  }

  .more{
font-size: 10px;}



  ::v-deep .el-calendar-table {
    .el-calendar-day {
      height: auto;
    }
  }
}</style
>>
