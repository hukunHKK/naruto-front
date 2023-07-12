<template>
  <div class="website-wrapper">
    <div style="margin-bottom: 5px;text-align: right;">
      <el-button type="warning" @click="dialogFormVisible = true">分享</el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column prop="website" label="网站">
        <template #default="{ row }">
          <ALink :url="row.protocol + row.website"></ALink>
        </template>
      </el-table-column>
      <el-table-column prop="createUser" label="老司机" width="100">
        <template #default="{ row }">
          <el-popconfirm v-if="userInfo.name === row.createUser || userInfo.name === '胡坤'" confirm-button-text="Y"
            cancel-button-text="N" title="确定要删除该网站吗?" @confirm="confirmDel(row.id)">
            <template #reference>
              <span>{{ row.createUser }}</span>
            </template>
          </el-popconfirm>
          <span v-else>{{ row.createUser }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" width="100"></el-table-column>
    </el-table>
    <el-dialog v-model="dialogFormVisible" :show-close="false" width="90%">
      <el-form :model="form" :rules="rules" :label-width="60" ref="ruleFormRef">
        <el-form-item label="网站" prop="website">
          <el-input v-model="form.website" autocomplete="off">
            <template #prepend>
              <el-select v-model="form.protocol" placeholder="Select" style="width: 115px">
                <el-option label="http://" value="http://" />
                <el-option label="https://" value="https://" />
              </el-select>
            </template>
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
import { getWebsite, addWebsite, delWebsite } from '_a/shareWebsite'
import { FormInstance, FormRules, ElMessage } from 'element-plus';
import { useUser } from '@/store/user'

const { userInfo } = useUser()
const tableData = ref([])
const getData = async () => {
  const res = await getWebsite()
  tableData.value = res.data
}
getData()

const dialogFormVisible = ref(false)
const rules = ref<FormRules>({
  website: [
    { required: true, trigger: 'blur', message: `${userInfo.name}你网站都不填？` },
    {
      validator: (_rule: any, value: any, callback: any) => {
        if (value.includes('.')) {
          callback()
        } else {
          callback(new Error(`这是网站？拒绝白嫖，从${userInfo.name}做起`))
        }
      }, trigger: 'blur'
    },
  ],
})
const ruleFormRef = ref<FormInstance | null>(null)
const form = ref({
  website: '',
  remark: '',
  protocol: 'https://',
  createUser: userInfo.name
})
const submit = () => {
  ruleFormRef.value!.validate(async (valid) => {
    if (valid) {
      const res: any = await addWebsite(form.value)
      if (res.code === 1) {
        ElMessage({
          duration: 5000,
          message: '感谢老板分享',
          type: 'success'
        })
        getData()
        dialogFormVisible.value = false
      } else {
        ElMessage({
          duration: 5000,
          message: res.message,
          type: 'error'
        })
      }
    }
  })
}
const confirmDel = async (id) => {
  const res: any = delWebsite({ id })
  if (res.code === 0) {
    ElMessage({
      duration: 5000,
      message: res.message,
      type: 'error'
    })
  } else {
    getData()
  }
}
</script>
<style scoped>
.website-wrapper {
  padding: 10px;
}
</style>