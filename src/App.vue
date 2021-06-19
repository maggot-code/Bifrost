<!--
 * @Author: zhangyang
 * @Date: 2021-06-19 23:09:36
 * @LastEditors: zhangyang
 * @LastEditTime: 2021-06-20 00:21:27
 * @Description: file content
-->
<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
    name: "App",
    components: {
        HelloWorld,
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
