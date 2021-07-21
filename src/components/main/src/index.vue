<!--
 * @Author: maggot-code
 * @Date: 2021-06-23 09:47:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-12 16:05:32
 * @Description: file content
-->
<template>
    <div class="b-main" :style="style">
        <bi-form></bi-form>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { default as BiForm } from "@pkg/component/form";
export default defineComponent({
    name: "b-main",

    components: { BiForm },

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

    data() {
        return {};
    },

    beforeCreate() {},

    created() {},
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>