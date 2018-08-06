<template>
  <div class="student">
    <el-table :data="tableData" :header-cell-style="{textAlign:'center'}" style="width: 100%;">
      <el-table-column prop="id" label="教师编号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
      </el-table-column>
      <el-table-column prop="teaching" label="任课">
      </el-table-column>
      <el-table-column prop="headMaster" label="班主任">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Teacher extends Vue {
  tableData: Array<any> = [
    {
      id: 123123,
      name: "李阳",
      age: 18,
      sex: "男",
      teaching: 99,
      headMaster: 0
    },
    {
      id: 123123,
      name: "李阳",
      age: 18,
      sex: "男",
      teaching: 99,
      headMaster: 1
    },
    {
      id: 123123,
      name: "李阳",
      age: 18,
      sex: "男",
      teaching: 99,
      headMaster: 1
    }
  ];
  handleDelete(index: number, row: object) {
    console.log(index, row);
  }
}
</script>
