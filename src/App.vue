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
        <transition>
            <router-view class="center"></router-view>
        </transition>        
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style >
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
</style>
