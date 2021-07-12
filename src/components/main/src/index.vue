<!--
 * @Author: maggot-code
 * @Date: 2021-06-23 09:47:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-12 13:15:17
 * @Description: file content
-->
<template>
    <div class="b-main" :style="style">main</div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    name: "b-main",

    components: {},

    props: {
        offsetH: {
            type: Number,
            default: 0,
        },
    },

    computed: {
        style(): object {
            return {
                height: `calc(100% - ${this.offsetH}px)`,
            };
        },
    },

    setup() {},

    beforeCreate() {},

    created() {},
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>