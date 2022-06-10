<template >
  <div class=" relative " >
    <div class=" w-screen mx-auto h-fit ">
      <img src="../assets/images/fasting.jpg" class="mx-auto max-w-5/6 max-h-96 min-w-5/6 slider_img " >

      <div class="absolute top-1/2 left-2 cursor-pointer" @click="logger">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <div class="absolute top-1/2 right-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SliderRevolution",
  data (){
    return {

    }
  },
  methods : {
    logger(){
      console.log('clicked')
    }
  }
}
</script>

<style scoped>
.slider_img {
  height: 35rem;
}
</style>