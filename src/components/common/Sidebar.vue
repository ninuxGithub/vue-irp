<template>
    <div class="sidebar">
        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>-->
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import ElMenu from "../../../node_modules/element-ui/packages/menu/src/menu.vue";
    import ElMenuItem from "../../../node_modules/element-ui/packages/menu/src/menu-item.vue";

    export default {
        components: {
            ElMenuItem,
            ElMenu},
        data() {
            return {
                isCollapse:true,
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '自述'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '标题1',
                        subs: [
                            {
                                index: 'demo',
                                title: 'demo'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '标题2',
                        subs: [
                            {
                                index: 'studenttable',
                                title: '学生信息表'
                            }
                        ]
                    },

                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        methods:{
            collapse(){

            }
        }

    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #fff3fc;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
