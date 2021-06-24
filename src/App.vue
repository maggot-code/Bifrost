<!--
 * @Author: maggot-code
 * @Date: 2021-06-19 23:09:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-23 11:22:26
 * @Description: file content
-->
<template>
    <el-image
        style="display: block; margin: 0 auto; width: 200px; height: 200px"
        fit="fill"
        :src="url"
    ></el-image>
    <b-main :offsetH="200"></b-main>
</template>

<script lang="ts">
import { default as BMain } from "@/components/main";
import LogoImg from "@/assets/images/icon/logo.png";
import { defineComponent } from "vue";
export default defineComponent({
    name: "App",
    components: {
        BMain,
    },
    data() {
        return {
            url: LogoImg,
        };
    },
});
</script>

<style>
@import "@/assets/style/normalize.min.scss";
@import "@/assets/style/base.scss";
</style>
