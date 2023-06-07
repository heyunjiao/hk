<template>
  <div class="PageTitle">
    <div style="display: flex;justify-content: space-between;">
     <div style="display: flex">
      <div class="h"></div>
      <div class="title"><p>{{ $t(title) }} <span v-if="number">-</span> {{ number }}</p></div>
     </div>
     <div style="margin-right: 15px;">
      <slot name="btn"></slot>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: "PageTitle",
  props: ['title', 'number']
}
</script>

<style scoped>
.h {
  width: 6px;
  height: 32px;
  background: #133B29;
  border-radius: 3px;
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin-left: 12px;
}


</style>
