<template>
    <div id="app">
        <div class="nav-box">
            <ul class="nav">
                <router-link to="/" exact tag="li">
                    <i class="fa fa-home"></i>
                    <span>home</span>
                </router-link>
               
                <li>
                    <router-link to="/document#abc">document</router-link>
                </li>
                <li>
                    <router-link to="/about">about</router-link>
                </li>
                <li>
                    <router-link to="/user">user</router-link>
                </li>
            </ul>
        </div>
        <router-view name="slider"></router-view>
        <transition :name="names" mode="out-in">
            <router-view class="center"></router-view>
        </transition>     

        当前导航的下标
        {{ $route.meta.index }}   
    </div>
</template>

<script>
export default {
    name: 'app',
    watch: {
        $route (to,from){
            console.log(to.meta.index);     //目标导航下标
            console.log(from.meta.index);     //离开导航下标
            if(to.meta.index < from.meta.index){
                this.names = 'right'
            }else{
                this.names = 'left'
            }
        }
    },
    data (){
        return {
            index: '/home',
            names: 'left'
        }
    }
}
</script>

<style>
html{
    overflow-x: hidden;
}
 .v-enter{
     opacity: 0;
 }
 .v-enter-to{
     opacity: 1;
 }
 .v-enter-active{
     transition: 1s;
 }
 .v-leave{
     opacity: 1;
 }

 .v-leave-to{
     opacity: 0;
 }
 
 .v-leave-active{
     transition: 1s;
 }
 .left-enter{
     transform: translateX(100%);
 }
 .left-enter-to{
     transform: translateX(0);
 }
 .left-enter-active,
 .left-leave-active{
     transition: 1s;
 }
 .left-leave{
     transform: translateX(0);
 }
 .left-leave-to{
     transform: translateX(100%);
 }

</style>
