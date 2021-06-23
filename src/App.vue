<!--
 * @Author: maggot-code
 * @Date: 2021-06-19 23:09:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-23 10:00:41
 * @Description: file content
-->
<template>
    <img alt="Vue logo" src="@/assets/images/icon/logo.png" />
    <b-main></b-main>
</template>

<script lang="ts">
import { default as BMain } from "@/components/main";
import { defineComponent } from "vue";
export default defineComponent({
    name: "App",
    components: {
        BMain,
    },
});
</script>

<style>
@import "@/assets/style/normalize.min.scss";
@import "@/assets/style/base.scss";
</style>
