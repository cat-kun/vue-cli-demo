<template>
    <div>
        我是user
        <div class="user-list">
            <router-link style="padding: 0 20px" :to="'/user/'+ item.type + '/' +item.id" key="item,index in userList" v-for="item in userList">{{ item.name }}</router-link>
        </div>
        <div class="user-info" style="font-size: 20px" v-if="userInfo.name">
            <p>姓名：{{userInfo.name}}</p>
            <p>性别：{{userInfo.sex}}</p>
            <p>爱好：{{userInfo.hobby}}</p>
        </div>        
        <div v-if="userInfo.name" class="info-link" style="font-size: 20px;" >
            <!-- <router-link exact to="?info=follow">他的关注</router-link>
            <router-link exact to="?info=share">他的分享</router-link> -->
            <router-link exact :to="{path:'',query: {info: 'follow'}}">他的关注</router-link>
            <router-link exact :to="{path:'',query: {info: 'share'}}">他的分享</router-link>
        </div>
    </div>
</template>
<script>
let data = [
  {
    id: 1,
    type: "vip",
    name: "林三",
    sex: "男",
    hobby: "吃鸡"
  },
  {
    id: 2,
    name: "隔壁老王",
    type: "vip",
    sex: "男",
    hobby: "打飞机"
  },
  {
    id: 3,
    name: "老王隔壁",
    type: "common",
    sex: "女",
    hobby: "打手枪"
  }
];
export default {
  data() {
    return {
      userList: data,
      userInfo: {}
    };
  },
  watch: {
    $route() {
      this.getData()
    }
  },
  //生命周期函数
  created() {
    /**
        渲染这个组件会调用一次生命周期函数
        复用这个组件，这个函数不会再次被调用
        地址一旦发生变化，$route会重新生成一个路由信息对象
    */
    //   console.log(this.$route) //路由信息对象
    // console.log(this.$route.params.userId)
    this.getData()
  },
  methods: {
    getData() {
      let id = this.$route.params.userId;
      if (id) {
        this.userInfo = this.userList.filter(item => {
          return item.id == id;
        })[0];
       
      } else {
        this.userInfo = {};
      }

    //   console.log(this.userInfo);
    }
  }
};
</script>
<style>

</style>
