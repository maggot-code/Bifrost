<!--
 * @Author: maggot-code
 * @Date: 2021-07-12 14:39:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-14 16:58:27
 * @Description: file content
-->

<template>
    <el-form
        class="bi-form"
        label-width="120px"
        label-position="left"
        size="mini"
    >
        <el-row :gutter="20">
            <el-col :span="24">
                <el-form-item label="活动名称" label-width="120px">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="活动名称11" label-width="120px">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    name: "bi-form",

    components: {},

    props: {},

    computed: {},

    setup() {},

    data() {
        return {};
    },

    beforeCreate() {},

    created() {},
});
</script>
