<template>
  <el-table :data="tableData" border>
    <el-table-column prop="name" align="center" label="姓名"></el-table-column>
    <el-table-column prop="websitePermission" align="center" label="共享">
      <template #="{ row }">
        <el-switch v-model="row.websitePermission" :before-change="changeWebsitePermission(row)" :loading="row.loading" />
      </template>
    </el-table-column>
  </el-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { getAllUser, updateWebsitePermission } from '_a/user'

const tableData = ref([])
const getData = async () => {
  const res = await getAllUser()
  tableData.value = res.data.map(item => {
    return {
      ...item,
      loading: false
    }
  })
}
getData()

const changeWebsitePermission = (row) => {
  const { name, websitePermission } = row
  return async () => {
    row.loading = true
    try {
      const res: any = await updateWebsitePermission({ name, websitePermission: !websitePermission })
      row.loading = false
      return res.code === 1
    } catch (error) {
      row.loading = false
      return false
    }
  }
}
</script>