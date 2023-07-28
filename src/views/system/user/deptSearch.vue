<template>
  <div class="dept">
    <el-input placeholder="输入部门名称查询" style="width: auto">
      <template #prefix>
        <el-icon><Search /></el-icon>
      </template>
    </el-input>
    <div class="dept_tree">
      <el-tree :data="data" default-expand-all :expand-on-click-node="false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = [
  {
    label: "HTer-Admin",
    children: [
      {
        label: "成都分公司",
        children: [
          {
            label: "研发部门",
          },
          {
            label: "测试部门",
          },
          {
            label: "运维部门",
          },
          {
            label: "UI设计",
          },
        ],
      },
      {
        label: "上海分公司",
        children: [
          {
            label: "研发部门",
          },
          {
            label: "测试部门",
          },
          {
            label: "运维部门",
          },
          {
            label: "UI设计",
          },
        ],
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.dept {
  width: 220px;
  margin-right: 30px;

  .dept_tree {
    margin-top: 18px;
  }
}
</style>
