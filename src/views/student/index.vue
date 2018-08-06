<template>
  <div class="student">
    <el-table :data="studentList" :header-cell-style="{textAlign:'center'}" style="width: 100%;">
      <el-table-column prop="id" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
      </el-table-column>
      <el-table-column prop="chinese" label="语文">
      </el-table-column>
      <el-table-column prop="math" label="数学">
      </el-table-column>
      <el-table-column prop="english" label="英语">
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
import { Component, Vue } from 'vue-property-decorator'
import { studentsList, deleteStudent } from '@/api/student'

@Component
export default class Student extends Vue {

  studentList: Array<any> = [
    {
      id: 123123,
      name: '李阳',
      age: 18,
      sex: '男',
      chinese: 99,
      math: 30,
      english: 55
    },
    {
      id: 123123,
      name: '李阳',
      age: 18,
      sex: '男',
      chinese: 99,
      math: 30,
      english: 55
    },
    {
      id: 123123,
      name: '李阳',
      age: 18,
      sex: '男',
      chinese: 99,
      math: 30,
      english: 55
    }
  ]

  mounted() {
    this.getList()
  }

  getList () {
    let params: any = {}
    studentsList(params).then((res: any) => {
      this.studentList = res.data
      console.log(this.studentList)
    })
  }

  handleDelete(index: number, row: any) {
    let params: number = row.id
    deleteStudent(params).then((res: any) => {
      if (res.data.code !== 0) {
        this.$message.warning('删除失败！')
        return
      }
      this.$message.success(res.data.message)
      this.getList()
    })
  }
}
</script>
