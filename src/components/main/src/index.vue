<!--
 * @Author: maggot-code
 * @Date: 2021-06-23 09:47:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-06 15:33:41
 * @Description: file content
-->
<template>
    <div class="b-main" :style="style">
        <bi-input></bi-input>
        <el-input></el-input>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { default as BiInput } from "@pkg/component/input";
import { default as UseElInput } from "@pkg/composables/bi-input";

export default defineComponent({
    name: "b-main",

    components: { BiInput },

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

    setup() {
        const elInputProps = UseElInput({});
        console.log(elInputProps);
    },

    beforeCreate() {},

    created() {},
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>