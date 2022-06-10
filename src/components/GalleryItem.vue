<template>

  <div class="flex flex-col items-center py-10">

    <router-link to="/gallery">
      <PageButton text="Gallery"/>
    </router-link>


    <div class="flex flex-wrap justify-around lg:px-32 py-4 mx-auto items-center w-full ">

      <div
          v-for="k in i" :key="k"
          class=" h-60 w-60 rounded shadow shadow-gray-500 bg-gray-200 relative mb-2">
        <img src="../assets/images/pastor_T_preaching.jpg" class=" h-full min-w-full rounded  ">
        <div class="pop_up_background z-50 absolute bottom-0 h-36 w-full p-4 text-white rounded-b"
            v-if="active === true">
          <h1 class="text-xl font-bold mx-auto">Description</h1>
          <p>Pastor T</p>
        </div>

        <div class="absolute top-0 left-0 shadow shadow-gray-400 flex items-center rounded-tl px-1 bg-gray-200" @click="toggle_active">
          <play :color="play_svg.color" :dimension="play_svg.dimension"/>
          <h1>description</h1>
        </div>
      </div>

    </div>
  </div>



</template>

<script>
import PageButton from "@/components/buttons/PageButton";
import play from "@/components/svgs/play";
export default {
  name: "Gallery",
  data(){
    return {
      active : false,
      i : 4,
      // color : 'rgb(131 24 67)',
      play_svg : {
        color: 'black',
        dimension : 'h-8 w-8',
      },

    }
  },
  components :{
    PageButton,
    play
  },
  methods : {
    toggle_active (){
      this.active = !this.active
      console.log(!this.active)
    }
  },

}
</script>

<style scoped>
.my_text {
  color: #920E42;
}
.pop_up_background {
  background-color: rgba(0,0,0,.5);
}

</style>