<template>
  <div class="page-bg">
    <BlogLinecard v-bind="LinecardCofig" >
    <AvatarComponent v-bind="avatarCofig" >
    </AvatarComponent>
    <h3>无糖红茶</h3>
    <p class="small-text">一个乐于分享自己所见所得的技术宅</p>

    </BlogLinecard>
  </div>
</template>


<script setup>
import AvatarComponent from '../components/Avatar-component.vue';
import BlogLinecard from '../components/Blog-Linecard.vue';


const avatarCofig = {
  position: 'relative',
  zIndex: '999',
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  bgUrl: '/images/my.jpg',
}

const LinecardCofig = {
  position: 'fixed',
  top: '200px',
  left: '30px',
  width: '200px',
  height: '200px' 

}


</script>


<style>
 .page-bg{
  position: absolute;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
 }

 .small-text{
  font-size: 10px;
 }
</style>