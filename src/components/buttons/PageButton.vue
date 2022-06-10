<template>

  <div class="w-fit">
    <h1 class="text-2xl text-pink-900 mb-3 font-bold font-mono cursor-pointer
      bg-gray-200 py-1 px-2 rounded hover:bg-gray-500 flex items-center">
      <play/>
      {{ text }}</h1>
  </div>
</template>

<script>
import play from "@/components/svgs/play";
export default {
  name: "PageButton",
  props : {
    text : String
  },
  components :{
    play
  }
}
</script>

<style scoped>

</style>