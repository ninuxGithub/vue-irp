<template>
    <div class="template">
        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" class="demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
        </el-menu>-->

        <div class="data-container" style="width: 100%">
            <el-table ref="multipleTable" :data="tableList" border  tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" stripe id="table">
                <el-table-column type="selection" width="55" align="center">
                </el-table-column>
                <el-table-column type="index" width="60" align="center">
                </el-table-column>
                <el-table-column prop="deviceName" label="设备名称" width="170" align="center">
                </el-table-column>
                <el-table-column prop="deviceId" label="设备ID" width="150" align="center">
                </el-table-column>
                <el-table-column prop="status" label="运行状态" width="100" align="center">
                    <template scope="scope">
                        <el-tag :type="scope.row.status === 1 ? 'success' : 'danger'">{{scope.row.status===1?'运行中':'关闭'}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column :render-header="renderHeader" align="center">
                    <el-table-column v-for="col in table" :prop="col.prop" :label="col.label">
                    </el-table-column>
                </el-table-column>
                <el-table-column label="更多" align="center" min-width="150">
                    <template scope="scope">
                        <el-button type="success" size="small">详情</el-button>
                        <el-button size="small" type="primary">操作</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style>
    .demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>

<script>
    export default {
        data: function () {
            return {
                isCollapse: true,
                tableList: [{
                    deviceName: '一代',
                    deviceId: 'KG-12345678',
                    status: 1,
                    time1: '1111',
                    filter1: '1111',
                    time2: '2222',
                    filter2: '2222',
                    time3: '3333',
                    filter3: '3333',
                    pm2d51: '2333',
                    pm2d52: '2333',
                    pm2d53: '2333'
                },{
                    deviceName: '二代',
                    deviceId: 'KG-12345678',
                    status: 2,
                    time1: '1111',
                    filter1: '1111',
                    time2: '2222',
                    filter2: '2222',
                    time3: '3333',
                    filter3: '3333',
                    pm2d51: '2331',
                    pm2d52: '2332',
                    pm2d53: '2333'
                }],
                table: [{ prop: 'time1', label: '时间1' },
                    { prop: 'filter1', label: '滤网1' },
                    { prop: 'pm2d51', label: 'PM2.51' }]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val
            },
            handleHeader1() {
                //this.table.splice(0, this.table.length)
                this.table = [
                    { prop: 'time1', label: '时间1' },
                    { prop: 'filter1', label: '滤网1' },
                    { prop: 'pm2d51', label: 'PM2.52' }
                ]
            },
            handleHeader2() {
                //this.table.splice(0, this.table.length)
                this.table = [
                    { prop: 'time2', label: '时间2' },
                    { prop: 'filter2', label: '滤网2' },
                    { prop: 'pm2d52', label: 'PM2.52' }
                ]
            },
            handleHeader3() {
                //this.table.splice(0, this.table.length)
                this.table = [
                    { prop: 'time3', label: '时间3' },
                    { prop: 'filter3', label: '滤网3' },
                    { prop: 'pm2d53', label: 'PM2.53' }
                ]
            },
            renderHeader(createElement, { _self }) {
                return createElement(
                    'div',
                    {
                        'class': 'renderTableHead'
                    },
                    [
                        createElement('el-button', {
                                attrs: { type: 'text' },
                                on: { click: this.handleHeader1 }
                            }, ['设备状态']
                        ),
                        createElement('el-button', {
                                attrs: { type: 'text' },
                                on: { click: this.handleHeader2 }
                            }, ['设备数据']
                        ),
                        createElement('el-button', {
                                attrs: { type: 'text' },
                                on: { click: this.handleHeader3 }
                            }, ['设备信息']
                        )
                    ]
                );
            }
        }
    }
</script>