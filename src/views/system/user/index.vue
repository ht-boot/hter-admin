<template>
  <div class="container_box">
    <div class="table-main user_main">
      <deptSearch />
      <div class="user_box">
        <el-form
          :model="queryKeys"
          inline
          label-width="auto"
          label-position="right"
        >
          <el-form-item label="用户名称">
            <el-input
              v-model="queryKeys.username"
              autocomplete="off"
              placeholder="请输入用户名称"
              clearable
            />
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input
              v-model.number="queryKeys.phone"
              autocomplete="off"
              placeholder="请输入手机号"
              clearable
            />
          </el-form-item>
          <el-form-item label="状态">
            <el-select
              v-model="queryKeys.status"
              placeholder="请选择状态"
              clearable
            >
              <el-option label="正常" :value="1" />
              <el-option label="停用" :value="0" />
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-input
              v-model="queryKeys.phone"
              autocomplete="off"
              placeholder="请选择用户状态"
            />
          </el-form-item>
          <el-form-item
            ><el-space wrap
              ><el-button type="primary" :icon="Search">搜索</el-button>
              <el-button :icon="Refresh">重置</el-button></el-space
            >
          </el-form-item>
        </el-form>
        <el-space wrap>
          <el-button type="primary" :icon="Plus">新增</el-button>
          <el-button type="success" :icon="Edit" :disabled="true"
            >修改</el-button
          >
          <el-button type="danger" :icon="Delete" :disabled="true"
            >删除</el-button
          >
        </el-space>
        <el-table
          :data="tableData"
          class="user_table"
          @select="handleSelectRow"
        >
          <el-table-column type="selection" width="40" />
          <el-table-column prop="username" label="用户名称" align="center" />
          <el-table-column prop="nickname" label="用户昵称" align="center" />
          <el-table-column prop="dept_id" label="部门" align="center" />
          <el-table-column prop="role_id" label="角色" align="center" />
          <el-table-column prop="phone" label="手机号码" align="center" />
          <el-table-column
            prop="email"
            label="电子邮箱"
            align="center"
            show-overflow-tooltip
          />
          <el-table-column
            prop="status"
            label="状态"
            align="center"
            width="80"
          />
          <el-table-column
            prop="create_time"
            label="创建时间"
            align="center"
            show-overflow-tooltip
          />
          <el-table-column
            fixed="right"
            prop="name"
            label="操作"
            :width="200"
            align="center"
          >
            <template #default="scope">
              <el-button link type="primary" size="small" :icon="EditPen">
                修改
              </el-button>
              <el-button
                :anc="scope"
                link
                type="primary"
                size="small"
                :icon="Delete"
              >
                删除
              </el-button>
              <el-button link type="primary" size="small" :icon="DArrowRight">
                更多
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <Pagination
          :total="totals"
          v-model:page="queryKeys.currentPage"
          v-model:size="queryKeys.pageSize"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, ref } from "vue";
import {
  Search,
  Refresh,
  Plus,
  Edit,
  EditPen,
  Delete,
  DArrowRight,
} from "@element-plus/icons-vue";
import deptSearch from "./deptSearch.vue";
import { apiGetUserList } from "@/api/modules/authorisation";
import Pagination from "@/components/pagination/index.vue";

const tableData = ref();

onMounted(async () => {
  tableData.value = await apiGetUserList();
});

const queryKeys = reactive({
  username: "",
  phone: "",
  status: "",
  createTime: "",
  currentPage: 1,
  pageSize: 10,
});

const totals = ref<number>(40);

const handleSelectRow = (selection: any, row: any) => {
  console.log(selection, row);
};
</script>

<style lang="scss" scoped>
.user_main {
  display: flex;
  width: 100%;
}
.user_box {
  width: calc(100% - 220px);
  .user_table {
    margin-top: 12px;
  }
}
</style>
