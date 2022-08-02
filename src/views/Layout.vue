<template>
<!--顶部通栏-->
  <AppTopNav></AppTopNav>
<!--头部组件-->
  <AppHeader></AppHeader>
<!--  内容容器-->
  <router-view></router-view>
<!--底部组件-->
  <AppFooter></AppFooter>
</template>

<script>
import AppTopNav from '@/components/AppTopNav'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'LayoutPage',
  components: {
    AppTopNav,
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>

</style>
