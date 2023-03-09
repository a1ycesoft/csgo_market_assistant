<template>
  <h3>上传头像</h3>
  <el-upload class="avatar-uploader" action="myapi/common/uploadAvatar" :show-file-list="true"
    :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon">
      <Plus />
    </el-icon>
  </el-upload>
  <h3>密码</h3>
  <el-button @click="dialogFormVisible = true" type="danger" size="large" plain>
    修改密码
  </el-button>

  <el-dialog v-model="dialogFormVisible" title="修改密码" width="450px">
    <el-form :model="form" :rules="rules" ref="ruleFormRef">
      <el-form-item label="请输入原密码">
        <el-input v-model="form.beforePassword" autocomplete="off" type="password" />
      </el-form-item>
      <el-form-item label="请输入新密码">
        <el-input v-model="form.afterPassword" autocomplete="off" type="password" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { Plus } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { UploadProps } from 'element-plus'
const router = useRouter()
const dialogFormVisible = ref(false)
const imageUrl = ref('')
const userId = ref('')
userId.value = JSON.parse(localStorage.getItem('userInfo')).userId
const { proxy }: any = getCurrentInstance()
const ruleFormRef = ref<FormInstance>()
const form = reactive({
  beforePassword: '',
  afterPassword: ''
})
const rules = reactive<FormRules>({
  beforePassword: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 25, message: 'Length should be 5 to 25', trigger: 'blur' },
  ],
  afterPassword: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 25, message: 'Length should be 5 to 25', trigger: 'blur' },
  ],
})
const submitForm = async (formEl: FormInstance | undefined) => {
  console.log("sub");
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      proxy.$http.post("/myapi/users/changePassword", {
        userId: userId.value,
        beforePassword: form.beforePassword,
        afterPassword: form.afterPassword
      }).then(res => {
        if (res.code == 1) {
          ElMessage({
            message: '修改成功',
            type: 'success',
          })
          router.push('/index/login')
          localStorage.removeItem('userInfo')
        }
        else if (res.code == 0) {
          ElMessage({
            message: '修改失败',
            type: 'error',
          })
        }
      })
    }
    else {
      ElMessage({
        message: '请检查您的输入',
        type: 'error',
      })
    }
  })
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = '/myapi/images/avatar/' + response.data;
  proxy.$http.post("/myapi/users/updateAvatar", {
    userId: userId.value,
    filename: imageUrl.value
  }).then(res => {
    console.log(res);
    ElMessage.success('更新头像成功')
  })
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 140px;
  height: 140px;
  text-align: center;
}
</style>