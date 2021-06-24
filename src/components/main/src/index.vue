<!--
 * @Author: maggot-code
 * @Date: 2021-06-23 09:47:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-23 15:15:18
 * @Description: file content
-->
<template>
    <div class="b-main" :style="style">
        <b-form></b-form>
    </div>
</template>

<script lang='ts'>
import { default as BForm } from "@pkg/component/form";
import { defineComponent } from "vue";

export default defineComponent({
    name: "b-main",

    components: { BForm },

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