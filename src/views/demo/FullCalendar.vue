<template>
  <div>
    <el-form
      label-position="left"
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item :label="$t('useCommonAll.memberName')">
        <el-input
          style="width: 150px;"
          v-model="formInline.user"
          :placeholder="$t('useCommonAll.memberName')"
        ></el-input>
      </el-form-item>
      <el-form-item label="项目">
        <el-select
          style="width: 150px;"
          v-model="formInline.region"
          placeholder="项目"
        >
          <el-option
            v-for="(item, index) in selectOption.projectType"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="教练">
        <el-select
          style="width: 150px;"
          v-model="formInline.region2"
          placeholder="教练"
        >
          <el-option
            v-for="(item, index) in selectOption.coach"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="房间">
        <el-select
          style="width: 150px;"
          v-model="formInline.region3"
          placeholder="房间"
        >
          <el-option
            v-for="(item, index) in selectOption.room"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="status-desc">
      <ul>
        <li><a class="bg-pink" href="#"></a>已确定</li>
        <li><a class="bg-yellow" href="#"></a>未确定</li>
      </ul>
    </div>

    <FullCalendar
      :options="calendarOptions"
      class="eventDeal-wrap"
      ref="calendar"
    >
      <template v-slot:eventContent="arg">
        <div class="fu-slot">
          <p>时间段：{{ arg.event.title }}</p>
          <p>{{$t('useCommonAll.name')}}：{{ arg.event.extendedProps.name }}</p>
          <p>{{$t('useCommonAll.reservationItem')}}：{{ arg.event.extendedProps.type }}</p>
          <p>{{$t('useCommonAll.name')}}时常：{{ arg.event.extendedProps.appHours }}h</p>
          <p>{{$t('useCommonAll.name')}}房间：{{ arg.event.extendedProps.room }}</p>
        </div>
      </template>
    </FullCalendar>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import selectOption from "@/views/global-data/selectOption";
import tippy from "tippy.js"; //引入 tippy.js
import "tippy.js/dist/tippy.css"; //引入 tippy.js
import "tippy.js/themes/light.css"; //引入主题
import "tippy.js/animations/scale.css";
export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      selectOption: selectOption,
      formInline: {
        user: "",
        region: "",
      },
      resData: [
        {
          title: "LUCY-高尔夫-教练",
          beginTime: "2023-06-20T10:30:00",
          endTime: "2023-06-20T11:30:00",
          status: 3,
          appointment: {
            appHours: 20,
            name: "LUCY",
            type: "乒乓球",
            major: "刘教练",
            room: "room1",
          },
          isCurrData: "4534",
        },
        {
          title: "LUCY-舞蹈-教练",
          beginTime: "2023-06-21T08:30:00",
          endTime: "2023-06-21T11:30:00",
          status: 1,
          appointment: {
            appHours: 2,
            name: "HONEY",
            type: "羽毛球",
            major: "he教练",
            room: "room3",
          },
          isCurrData: "4534",
        },
        {
          title: "LUCY-乒乓球-教练",
          beginTime: "2023-06-22T10:30:00",
          endTime: "2023-06-22T11:30:00",
          status: 2,
          appointment: {
            appHours: 20,
            name: "HHH",
            type: "高尔夫",
            major: "张教练",
            room: "room1",
          },
          isCurrData: "4534",
        },
      ],
      calendarOptions: {
        // 引入的插件
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        // 日历头部按钮位置
        headerToolbar: {
          left: "today,prevYear,nextYear",
          center: "title",
          right: "prev,timeGridWeek,next",
        },
        // 日历头部按钮中文转换
        buttonText: {
          prevYear: "上一年",
          nextYear: "下一年",
          today: "今天",
          month: "月",
          week: "周",
          day: "天",
        },
        initialView: "timeGridWeek", // 指定默认显示视图
        locale: Cookies.get("language") === "zh" ? "zh" : "es", // 切换语言，当前为中文
        firstDay: "0", // 设置一周中显示的第一天是周几，周日是0，周一是1，以此类推
        weekNumberCalculation: "ISO", // 与firstDay配套使用
        eventColor: "#000", // 全部日历日程背景色
        eventTextColor: "#000",
        timeGridEventMinHeight: "20", // 设置事件的最小高度
        aspectRatio: "1.5", // 设置日历单元格宽高比
        displayEventTime: false, // 是否显示事件时间
        allDaySlot: false, // 周、日视图时，all-day不显示
        eventLimit: true, // 设置月日程，与all-day slot 的最大显示数量，超过的通过弹窗展示
        eventTimeFormat: {
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        },
        slotLabelFormat: {
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
          hour12: false, // 设置时间为24小时制
        },
        events: [
          //   {
          //     title: `预约姓名:LUCY 预约教练：HONEY 项目：羽毛球`,
          //     start: "2023-06-20T10:30:00",
          //     end: "2023-06-20T11:30:00",
          //     extendedProps: {
          //       department: "BioChemistry",
          //     },
          //     description: "Lecture",
          //     className: "eventClass",
          //   },
        ], // 日程数组
        moreLinkClassNames: "more-btns",
        moreLinkContent: "查看更多",
        moreLinkContent: this.moreLinkContent,
        aspectRatio: 1.35,
        // 事件
        editable: false, // 是否可以进行（拖动、缩放）修改
        eventStartEditable: false, // Event日程开始时间可以改变，默认为true，若为false,则表示开始结束时间范围不能拉伸，只能拖拽
        eventDurationEditable: false, // Event日程的开始结束时间距离是否可以改变，默认为true,若为false，则表示开始结束时间范围不能拉伸，只能拖拽
        selectable: false, // 是否可以选中日历格
        selectMirror: true,
        selectMinDistance: 0, // 选中日历格的最小距离
        weekends: true,
        navLinks: true, // 天链接
        selectHelper: false,
        selectEventOverlap: false, // 相同时间段的多个日程视觉上是否允许重叠，默认为true，允许
        dayMaxEvents: false,
        eventMouseEnter: this.eventMouseEnter,
        // dateClick: this.handleDateClick, // 日期点击
        // eventsSet: this.handleEvents, // 事件点击
        // eventClick: this.handleEventClick, // 日程点击信息展示
        // eventDrop: this.handleEventDrop, // 日程拖动事件
        // eventResize: this.eventResize, // 日程缩放事件
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.inintBoard(this.resData);
    });
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    // 日程事件点击
    handleEvents(info) {
      console.log("handleEvents.info:", info);
      // this.currentEvents = events
    },
    handleWeekendsToggle() {
      console.log("handleWeekendsToggle");
      this.calendarOptions.weekends = !this.calendarOptions.weekends;
    },
    // 日期点击
    handleDateClick(selectInfo) {
      if (
        confirm("您是否要在【" + selectInfo.dateStr + "】添加一个新的事件？")
      ) {
        // 父组件直接调用子组件方法
        this.$refs["eventDialogue"].openDialog("add");
        // 父组件直接修改子组件变量
        // this.$refs['eventDialogue'].dialogVisible = true
      }
    },
    // 日程点击信息展示
    handleEventClick(info) {
      console.log("handleEventClick.info:", info);
      info.el.style.borderColor = "red";
      this.$refs["eventDialogue"].openDialog("view", info);
    },
    // 日程事件触发
    eventClick(info) {
      console.log("eventClick.info:", info);
      info.el.style.borderColor = "red";
    },
    // 日程拖动事件
    handleEventDrop(info) {
      this.$refs["eventDialogue"].eventFormModel.start = info.event.start;
      this.$refs["eventDialogue"].eventFormModel.end = info.event.end;
    },
    // 日程缩放事件
    eventResize(info) {
      this.$refs["eventDialogue"].eventFormModel.start = info.event.start;
      this.$refs["eventDialogue"].eventFormModel.end = info.event.end;
    },

    inintBoard(resData) {
      //   this.$refs.calendar.initOption(resData);
      let data = resData; //回显其他人预约过的数据到看板上
      if (!data) return;
      let newD = data.map((item, index) => {
        //根据返回的status判断当前是待审核  已预约的颜色，根据isCurrData判断是否是当前条的编辑查看按钮进来的数据
        return {
          id: index,
          start: item.beginTime,
          end: item.endTime,
          display: "block",
          className:
            item.isCurrData == true
              ? ""
              : item.status == 3
              ? "borderBlue"
              : item.status == 2
              ? "borderOrange"
              : "",
          color:
            item.isCurrData == true
              ? "#3788d8"
              : item.status == 3
              ? "#D6F1FF"
              : item.status == 2
              ? "#FFECDC"
              : item.status == 1
              ? "#FFDAD6"
              : "#fff",
          num: item.appointment.appHours,
          status: item.status,
          isCurrData: item.isCurrData,
          title: `${this.getTitle(item.beginTime, item.endTime)}`,
          name: item.appointment.name,
          type: item.appointment.type,
          appHours: item.appointment.appHours,
          room: item.appointment.room,
        };
      });
      console.log(newD);
      this.calendarOptions.events = newD;
      //   this.$refs.calendar.pushData(newD);
    },
    getTitle(date1, date2) {
      let start = date1.substring(11, 16);
      let end = date2.substring(11, 16);
      return `${start}~${end}`;
    },
    eventMouseEnter: function (calEvent, jsEvent, view) {
      //鼠标在日程区块上时触发
      console.log(111, calEvent, jsEvent, view);
      let content = ""; //content中可以直接设置悬浮框中内容的样式

      content =
        content +
        ` <div class="fu-slot">
      <p>时间段：${calEvent.event.title}</p>
     <p>姓名：${calEvent.event._def.extendedProps.name}</p>
     <p>项目：${calEvent.event._def.extendedProps.type}</p>
     <p>时常：${calEvent.event._def.extendedProps.appHours}h</p>
     <p>房间：${calEvent.event._def.extendedProps.room}</p>
     </div>`;
      tippy(calEvent.el, {
        content: content, //悬浮框展示的内容
        // theme: 'light',  //悬浮框主题，默认主题中的light主题（白底黑字）
        theme: "tomato", //自定义主题，颜色在style中设置
        allowHTML: true, //为true的时候，可以识别content中的html
      });
    },
  },
};
</script>

<style lang="scss">
.fc .fc-button-primary {
  background-color: #123a28 !important;
}
.fc .fc-button-primary:focus {
  box-shadow: none;
}
.fc .fc-event-main {
  overflow: hidden;
}
.demo-form-inline {
  .el-form-item {
    margin-bottom: 0;
  }
}

.fu-slot {
  p {
    margin-bottom: 4px;
  }
}
</style>
<style lang="scss" scoped>
.status-desc {
  width: 100%;
  margin: 10px 0;
  text-align: right;
  ul {
    display: flex;
    flex-direction: row-reverse;

    li {
      list-style: none;
      font-size: 14px;
      margin-right: 6px;
      .bg-pink {
        background-color: rgb(255, 218, 214);
      }
      .bg-yellow {
        background-color: rgb(214, 241, 255);
      }
      a {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: red;
        border-radius: 50%;
        white-space: nowrap;
        margin-right: 4px;
      }
    }
  }
}
</style>
