<template>
  <div class="calc">
    <WSchedule
      :planList="timePeriodList"
      :isFirstDayOfMondayOrSunday="1"
      @handleDetail="handleDetail"
      @handleCardDetail="handleCardDetail"
      @changeWeek="changeWeek"
    >
      <template v-slot:thing="{ row }" >
        <div class="tem">
            <span>预约日期：{{ row.date }}</span>
        <span>预约时间：{{ row.timePeriod }}</span>
        <span>预约项目：{{ row.watchman }}</span>
        <span>预约房间：{{ row.place }}</span>

        </div>
       
      </template>
    </WSchedule>
  </div>
</template>

<script>
import Vue from "vue";
import WSchedule from "wschedule";
import "wschedule/dist/wschedule.css";
Vue.use(WSchedule);

export default {
  name: "App",
  components: {},
  data() {
    /**
     * 获取当天时间
     * @returns {string}
     */
    function getCurDay(num = 0) {
      var datetime = new Date();
      var year = datetime.getFullYear();
      var month =
        datetime.getMonth() + 1 < 10
          ? "0" + (datetime.getMonth() + 1)
          : datetime.getMonth() + 1;
      let day = datetime.getDate();
      if (day + num > 0) {
        day =
          day + num < 10
            ? "0" + (datetime.getDate() + num)
            : datetime.getDate() + num;
      } else {
        day =
          day - num < 10
            ? "0" + (datetime.getDate() - num)
            : datetime.getDate() - num;
      }
      return `${year}-${month}-${day}`;
    }
    return {
      timePeriodList: [
        { timePeriod: "8:00" ,
    
        schedule: [
            {
              isExpend: false,
              [getCurDay()]: [
                {
                  timePeriod: "8:00",
                  date: getCurDay(),
                  course: "LUCY",
                  watchman: "瑜伽",
                  place: "room1",
                  status: 2,
                },
               
              ],
            },
           
          ],
    },
        { timePeriod: "9:00", schedule: [
            {
              isExpend: false,
              [getCurDay()]: [
                {
                  timePeriod: "9:00",
                  date: getCurDay(),
                  course: "HONEY",
                  watchman: "高尔夫",
                  place: "room2",
                  status: 1,
                },
               
              ],
            },
           
          ], },
        { timePeriod: "8:00-10:00",schedule: [
            {
              isExpend: false,
              [getCurDay()]: [
                {
                  timePeriod: "9:00",
                  date: getCurDay(),
                  course: "HONEY",
                  watchman: "高尔夫",
                  place: "room2",
                  status: 1,
                },
               
              ],
            },
           
          ], },
        { timePeriod: "11:00" },
        { timePeriod: "12:00" },
        { timePeriod: "13:00" },
        { timePeriod: "14:00" },
        { timePeriod: "15:00" },
        { timePeriod: "16:00" },
        { timePeriod: "17:00" },
        { timePeriod: "18:00" },
        { timePeriod: "19:00" },
        { timePeriod: "20:00" },
        { timePeriod: "21:00" },
        { timePeriod: "22:00" },
        { timePeriod: "23:00" },
        { timePeriod: "24:00" },
        // {
        //   timePeriod: "8:00~10:00",
        //   schedule: [
        //     {
        //       isExpend: false,
        //       [getCurDay()]: [
        //         {
        //           timePeriod: "8:00~10:00",
        //           date: getCurDay(),
        //           course: "大学英语",
        //           watchman: "井底的蜗牛",
        //           place: "测试地点",
        //           status: 1,
        //         },
        //         {
        //           timePeriod: "8:00~10:00",
        //           date: getCurDay(),
        //           course: "大学英语",
        //           watchman: "井底的蜗牛",
        //           place: "测试地点",
        //           status: 2,
        //         },
        //         {
        //           timePeriod: "8:00~10:00",
        //           date: getCurDay(),
        //           course: "大学英语",
        //           watchman: "井底的蜗牛",
        //           place: "测试地点",
        //           status: 3,
        //         },
        //       ],
        //     },
        //     {
        //       isExpend: false,
        //       [getCurDay(-1)]: [
        //         {
        //           id: 1,
        //           timePeriod: "8:00~10:00",
        //           date: getCurDay(-1),
        //           course: "大学英语",
        //           watchman: "井底的蜗牛",
        //           place: "测试地点",
        //           status: 1,
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   timePeriod: "12:00~14:00",
        //   schedule: [
        //     {
        //       isExpend: false,
        //       [getCurDay()]: [
        //         {
        //           timePeriod: "12:00~14:00",
        //           date: getCurDay(),
        //           course: "大学英语",
        //           watchman: "井底的蜗牛",
        //           place: "测试地点",
        //           status: 2,
        //         },
        //         {
        //           timePeriod: "12:00~14:00",
        //           date: getCurDay(),
        //           course: "大学英语",
        //           watchman: "井底的蜗牛",
        //           place: "测试地点",
        //           status: 3,
        //         },
        //       ],
        //     },
        //     {
        //       isExpend: false,
        //       [getCurDay(-1)]: [
        //         {
        //           timePeriod: "12:00~14:00",
        //           date: getCurDay(-1),
        //           course: "大学英语",
        //           watchman: "井底的蜗牛",
        //           place: "测试地点",
        //           status: 1,
        //         },
        //         {
        //           timePeriod: "实验室1",
        //           date: getCurDay(-1),
        //           course: "大学英语",
        //           watchman: "井底的蜗牛",
        //           place: "测试地点",
        //           status: 1,
        //         },
        //         {
        //           timePeriod: "实验室1",
        //           date: getCurDay(-1),
        //           course: "大学英语",
        //           watchman: "井底的蜗牛",
        //           place: "测试地点",
        //           status: 1,
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   timePeriod: "14:00~16:00",
        //   schedule: [],
        // },
      ],
    };
  },
  methods: {
    /**
     * 点击详情
     * @param row
     */
    handleDetail(row) {
      console.log(row);
    },
    /**
     * 点击卡片查看全部内容
     */
    handleCardDetail(row) {
      console.log(row);
    },
    /**
     * 切换周
     * @param date
     */
    changeWeek(date) {
      console.log(date);
    },
  },
};
</script>

<style lang='scss' scoped>
.calc{
    padding: 4px;

    span{
        display: block;
    font-size: 10px;
    margin-bottom: 6px;
    }
}
</style>
