<template>
  <div class="table">
      <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="username" label="UserName"></el-table-column>
          <el-table-column prop="email" label="Email"></el-table-column>
          <!-- 其他表格列 -->
      </el-table>
  </div>
</template>

<script>
import EditForm from './EditForm'
import SearchBar from './SearchBar'

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
          this.$axios.get('/test').then(resp => {
              if (resp && resp.status === 200) {
                  _this.tableData = resp.data
              }
          })
      }
  }
}
</script>


<style scoped>
.table {
  margin-top: 200px;
  background-color: #333;
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
