<template>
  <div class="website-wrapper">
    <el-table :data="tableData" border>
      <el-table-column prop="website" align="center" label="记录">
        <template #="{ row }">
          <div>{{ row.user }}</div>
          <div>{{ row.website }}</div>
          <div>{{ row.visitTime }}</div>
          <div></div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { getRecord } from '_a/shareWebsite'
import { getDate } from '@/utils/dateFormat'

const tableData = ref([])
const getData = async () => {
  const res = await getRecord()
  tableData.value = res.data.map(item => {
    return {
      ...item,
      visitTime: getDate(item.createdAt, '-', true)
    }
  })
}
getData()
</script>
<style scoped>
.website-wrapper {
  padding: 10px;
}
</style>