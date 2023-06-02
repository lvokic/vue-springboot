<template>
    <div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="email" label="Email"></el-table-column>
            <!-- 其他表格列 -->
        </el-table>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'Books',
    components: { EditForm, SearchBar },
    data() {
        return {
            tableData: [],
        }
    },
    mounted: function () {
        this.loadUsers()
    },
    methods: {
        loadUsers() {
            var _this = this
            this.$axios.get('/users').then(resp => {
                if (resp && resp.status === 200) {
                    _this.books = resp.data
                }
            })
        }
    }
}
</script>


<style scoped>
.cover {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
}

img {
    width: 115px;
    height: 172px;
    /*margin: 0 auto;*/
}

.title {
    font-size: 14px;
    text-align: left;
}

.author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
}

.abstract {
    display: block;
    line-height: 17px;
}

.el-icon-delete {
    cursor: pointer;
    float: right;
}

.switch {
    display: flex;
    position: absolute;
    left: 780px;
    top: 25px;
}

a {
    text-decoration: none;
}

a:link,
a:visited,
a:focus {
    color: #3377aa;
}
</style>
  