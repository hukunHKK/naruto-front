<template>
  <div class="website-wrapper">
    <div style="margin-bottom: 5px;text-align: right;">
      <el-button type="warning" @click="dialogFormVisible = true">分享</el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column prop="website" label="网站">
        <template #default="{ row }">
          <ALink :url="row.website"></ALink>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" width="100"></el-table-column>
    </el-table>
    <el-dialog v-model="dialogFormVisible" :show-close="false" width="90%">
      <el-form :model="form" :rules="rules" :label-width="60" ref="ruleFormRef">
        <el-form-item label="网站" prop="website">
          <el-input v-model="form.website" autocomplete="off">
            <template #prepend>Http://</template>
          </el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="dialogFormVisible = false">算鸟，偷偷滴打枪</el-button>
          <el-button type="primary" @click="submit">
            分享
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import ALink from '_c/ALink.vue'
import { getWebsite } from '_a/shareWebsite'
import { FormInstance, FormRules } from 'element-plus';
console.log(123);

const tableData = ref([])
const getData = async () => {
  const res = await getWebsite()
  tableData.value = res.data
}
getData()

const dialogFormVisible = ref(false)
const rules = ref<FormRules>({
  website: [{ required: true, trigger: 'blur', message: '网站都不填？' }],
})
const ruleFormRef = ref<FormInstance | null>(null)
const form = ref({
  website: '',
  remark: ''
})
const submit = () => {
  ruleFormRef.value!.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
<style scoped>
.website-wrapper {
  padding: 10px;
}
</style>