<template>
	<section>
		<!--工具条-->
		<search-bar @search="getUser"></search-bar>
		<Table border :columns="columns" :data="users"></Table>
	</section>
</template>
<script>
	import { getUserList } from '../../api/api';
    import SearchBar from '../../components/SearchBar.vue'
    export default {
        components: {SearchBar},
		data() {
			return {
				loading: false,
				columns: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '性别',
                        key: 'sex'
                    },
					 {
                        title: '年龄',
                        key: 'age'
                    },
					{
                        title: '生日',
                        key: 'birth',
                        sortable: true
                    },
                    {
                        title: '地址',
                        key: 'addr'
                    }
                ],
				users: []
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取用户列表
			getUser: function (name) {
				let para = {
					name: name
				};
				this.loading = true;
				getUserList(para).then((res) => {
					this.users = res.data.users;
					this.loading = false;
				});
			}
		},
		mounted() {
			this.getUser();
		}
	};

</script>

<style scoped>
	.toolbar {
		padding-top: 20px;
		padding-bottom: 0px;
	}
</style>