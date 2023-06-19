<template>
  <div class="calendar" style="">
        <div class="left">
          
          <div :class="roomid==0 ? 'active' : ''" @click="choseromm(0)">全部</div>
          <div v-for="(item,i) in roomlist" :key="i" @click="choseromm(item.id)"
          :class="roomid==item.id ? 'active' : ''">
            {{ item.name }}
          </div>
        </div>
        <el-calendar id="">
          <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
          <template slot="dateCell" slot-scope="{date, data}">
            <!--自定义内容-->
            <div @click="show(data.day)">
              <div class="calendar-day" style="text-align: center">
                <!-- <div :class="(date.getDay()==6 || date.getDay()==0)? 'weeked' :'notweeked'">{{data.day}}</div> -->
              
                <div class="daytop">
                  <span :class="(date.getDay()==6 || date.getDay()==0)? 'weeked' :'notweeked'">
                  {{ date.getDate() }}
                  </span>
                  <i class="el-icon-edit" v-if="date > (new Date())"></i>
                </div>
               <div v-for="(item,index) in showlist" :key="index">
                    <!-- 加数据 -->
                    <div v-if="data.day == item.day">
                          <p>
                            余
                            <span  style="color:green">{{item.allnum-item.num}}</span>
                            间 / 售
                            <span style="color:red">{{ item.num }}</span>
                            间
                          </p>
                    </div>
                </div>
              </div>
            </div>
          </template>
        </el-calendar>
      </div>
</template>

<script>
// import { reviewLstApi} from '@/api/product'
export default {
  data() {
    return {
      
      roomlist:[{
        id:1,name:"房间1"
      },{
        id:2,name:"房间2"
      }] ,
      roomid:0,
      list:[
        {
          day:"2023-04-04",
          num:2,
          allnum:6,
          roomid:1
        }, {
          day:"2023-04-19",
          num:21,
          allnum:61,
          roomid:2
        }, {
          day:"2023-04-29",
          num:21,
          allnum:61,
          roomid:2
        }
      ],
      
    }
  },
  mounted() {
    
  },
  computed:{
    showlist(){
      if (this.roomid==0) {
        return this.list
      }
      var list=this.list.filter(item=> item.roomid==this.roomid)
     
      return list
    }
  },
  methods: {
    show(data){
      console.log(data)
    },
    choseromm(id){
      this.roomid=id
      
    },
    
     
  }
}
</script>
 
<style lang="scss" scoped>
.box-card{
  padding:0 20px;
}
 .calendar{
  width: 1100px;
  height:550px;
  display: flex;
  .left{
    display: flex;
    flex-direction: column;
    div{
      width: 100px;
      border: 1px solid #dbdbdb;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
    }
    .active{
      color: #2c6ed0;
      font-weight: bold;
    }
  }
 }
 
</style>
 <style lang="scss">
.el-carousel__indicators--horizontal {
		bottom: 0;
		// left: 100px;
		transform: translateX(-50%);
		width: 100%;
		display: flex;
		justify-content: center;
		
	}
.calendar{
	
	.el-button--mini:nth-child(1){
		display: none;
	}
 
	p{
	font-size: 12px;
	line-height: 20px;
	}
	.el-calendar__header{
	padding: 6px 10px;
	}
	.el-calendar-table .el-calendar-day{
	padding:5px 3px !important;
	height: 70px !important;  
	}
	.el-calendar__body{
	padding: 5px !important;
	}
	.el-calendar-table thead th{
	padding:5px !important;
	font-size: 12px;
	}
	#calendar{
	   
		.el-button-group>.el-button:not(:first-child) {
			margin-right: -1px;
			/* display: none; */
		}
    
	}
  .daytop{
    display: flex;
    width: 100%;
    padding: 5px 10px;
    justify-content: space-between;
    span{
      font-size: 14px;
      font-weight: bold;
    }
    i{
      font-size: 14px;
    }
  }
	 
    .weeked{
        color: #ff0000;
    }
}
</style>