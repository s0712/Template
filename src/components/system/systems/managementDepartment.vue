<template>
  <section class="managementDepartment">
    <nav class="pub_select">
      <el-form ref="form" :model="form" label-width="86px">
        <el-row>
          <el-col>
            <el-form-item label="活动名称:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="活动名称:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="活动名称:">
              <el-select v-model="form.name" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-button class="mlem" type="primary">查询</el-button>
          <el-button class="mlem">重置</el-button>
        </el-row>
      </el-form>
    </nav>
    <section class="pub_hr">
      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>系统管理</el-breadcrumb-item>
          <el-breadcrumb-item>系统设置</el-breadcrumb-item>
          <el-breadcrumb-item>科室管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
        <el-button class="mlem" type="primary">新建</el-button>
        <el-button class="mlem">刷新</el-button>
        <span class="mlem">
            科室管理共<font class='pub_count'>0</font>条
        </span>
      </div>
    </section>
    <section class='main'>
      <el-table v-scroll='queryData' :data="array.tableData" border height="100">
        <el-table-column label="操作" prop="name"></el-table-column>
        <el-table-column label="操作" prop="name"></el-table-column>
        <el-table-column label="操作" prop="name"></el-table-column>
        <el-table-column label="操作" prop="name"></el-table-column>
      </el-table>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
      },
      array: {
        tableData: [], //表格数据
      },
      obj: {

      },
      other: {

      },
      alert: {

      }
    }
  },
  computed: {

  },
  created() {
    this.queryData(true)
  },
  methods: {
    //查询数据
    queryData(can) {
      console.log('123sdjflksdkgl');
      can ? this.form.pageStart = 0 : this.form.pageStart++;
      // if (can) {
      //   this.array.tableData = aaa;
      // } else {
      //   this.array.tableData.push(...aaa);
      // }
    }
  }
}

</script>
<style lang='less'>
.managementDepartment {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  .main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    .el-table {
      flex-grow: 1;
    }
  }
}

</style>
