<template>
  <div class="absolute almost_transparent h-screen w-screen z-20  top-0 rounded flex items-center">

    <div class="w-full h-5/6 mx-auto rounded p-3 bg-black">
      video
    </div>

  </div>
</template>

<script>

export default {
  name: "LiveService",

}
</script>

<style scoped>
.almost_transparent {
  background-color: rgba(0,0,0,.5);
}

.vertical_phone {
  height: 1080px;
  width: 1920px;
}
</style>