<template>
  <div class="editor-box">
    <Toolbar
      class="toolbar"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      class="editor"
      :style="{ height }"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, shallowRef, computed } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { IToolbarConfig, IEditorConfig } from "@wangeditor/editor";
import "@wangeditor/editor/dist/css/style.css"; // 引入 wangeditor css
import { apiUploadImage } from "@/api/modules/uploadFile";

interface RichEditorPropsType {
  value: string; // 富文本值 ==> 必传
  toolbarConfig?: Partial<IToolbarConfig>; // 工具栏配置 ==> 非必传（默认为空）
  editorConfig?: Partial<IEditorConfig>; // 编辑器配置 ==> 非必传（默认为空）
  height?: string; // 富文本高度 ==> 非必传（默认为 500px）
  mode?: "default" | "simple"; // 富文本模式 ==> 非必传（默认为 default）
  disabled?: boolean; // 是否禁用编辑器 ==> 非必传（默认为false）
}

const props = withDefaults(defineProps<RichEditorPropsType>(), {
  toolbarConfig: () => {
    return {
      excludeKeys: [],
    };
  },
  editorConfig: () => {
    return {
      placeholder: "请输入内容...",
      MENU_CONF: {},
    };
  },
  height: "500px",
  mode: "default",
  disabled: false,
});

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 实例化编辑器
const handleCreated = (editor: any) => {
  editorRef.value = editor;
};

// 禁用富文本编辑器
if (props.disabled) nextTick(() => editorRef.value.disable());

const emit = defineEmits(["update:value"]);
// 富文本的内容监听，触发父组件改变，实现双向数据绑定
const valueHtml = computed({
  get() {
    return props.value;
  },
  set(val: string) {
    // 防止富文本内容为空时，校验失败
    if (editorRef.value.isEmpty()) val = "";
    emit("update:value", val);
  },
});

// 上传图片
type InsertFnTypeImg = (url: string, alt?: string, href?: string) => void;

props.editorConfig.MENU_CONF!["uploadImage"] = {
  //   meta: {
  //     token: "JpRpxJoUMlo2hQKG",
  //   },

  async customUpload(file: File, insertFn: InsertFnTypeImg) {
    if (!uploadImgValidate(file)) return;
    let formData = new FormData();
    /**
     * 为方便暂时这样写，后续会改动到 apiUploadImage() 里面去
     */
    formData.append("image", file);
    formData.append("token", "JpRpxJoUMlo2hQKG");
    formData.append("type", "alpai");
    try {
      const { data } = await apiUploadImage(formData);
      insertFn(data.fileUrl);
    } catch (error) {
      console.log(error);
    }
  },
};

// 图片上传前判断
const uploadImgValidate = (file: File): boolean => {
  // 函数体
  console.log(file);
  return true;
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

// 暴露属性
defineExpose({
  editor: editorRef,
});
</script>

<style lang="scss" scoped>
.editor-box {
  .toolbar {
    border: 1px solid #ccc;
  }
  .editor {
    border: 1px solid #ccc;
    border-top: none;
    overflow-y: hidden;
  }
}
</style>
