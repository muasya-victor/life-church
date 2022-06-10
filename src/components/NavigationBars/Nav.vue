<template>

  <!-------------------------------           top most nav        ------------------------------------------------->
  <div class=" p-0 py-0 relative " v-if="top_nav_active === true">
    <div class="flex flex-wrap justify-between px-16 nav top_nav text-sm ">
      <div>
        <h6 class="font-bold">First service</h6>
        <p>9:00 am - 11:00 am</p>
      </div>

      <div>
        <h1 class="font-bold">Second Service</h1>
        <p>11:30 am - 1:30 pm</p>
      </div>
    </div>

    <button class="absolute top-0 right-3" @click="toggle_top_nav">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" :fill="color">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <!-------------------------------          nav links nav for large screens      ------------------------------------------------>
  <div class="hidden lg:flex gap-8 lg:justify-between text-amber-900 shadow shadow-gray-300 mb-0 py-4 px-4 mb-8 sticky nav-toggle" data-target="">
    <h1 class="text-xl font-bold hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-white">
      Life Church Limuru
    </h1>

    <h1 @click="toggle_live_event"
        class="text-xl w-fit font-bold bg-pink-900 rounded px-2 py-0.5 hover:py-1 hover:bg-pink-800 hover:px-3 text-white cursor-pointer">
      Live Event
    </h1>

<!--    w-1/3 sm:flex  sm:flex-col justify-between    -->
    <div class="w-1/3 font-bold nav flex flex-wrap justify-between g-8">
      <router-link to="/" class="hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-cyan-50 mr-1">Home</router-link>
      <router-link to="/announcements" class="hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-cyan-50 mr-1">Announcements</router-link>
      <router-link to="/sermons" class="hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-cyan-50 mr-1">Sermons</router-link>
      <router-link to="/biblestudy" class="hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-cyan-50 mr-1">Bible Study</router-link>
      <router-link to="/gallery" class="hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-cyan-50 mr-1">Gallery</router-link>
    </div>

  </div>

  <!--------------------------------          nav links nav for mobile and tablets ---------------------------------->
  <div class="lg:hidden flex flex-col items-center text-amber-900 shadow shadow-gray-300 mb-0 py-4  mb-8 sticky nav-toggle">
    <div class="flex flex-wrap flex-grow flex-col gap-8 justify-between w-full py-2 px-2">
      <h1 class="text-xl font-bold hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-white">
        Life Church Limuru
      </h1>

      <h1 @click="toggle_live_event"
          v-if="live_event_active === false"
          class="text-xl w-fit font-bold bg-pink-900 rounded px-2 py-0.5 hover:py-1 hover:bg-pink-800 hover:px-3 text-white cursor-pointer">
        Live Event
      </h1>

<!--      burger button-->
      <div
          class="hover:bg-pink-900 rounded hover:text-white w-fit"  >
        <svg  @click="toggle_nav_links_nav" xmlns="http://www.w3.org/2000/svg" class="h-8 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>

    <!----------------------------------- links ---------------------------------------------   -->
    <div

        @mouseleave="toggle_nav_links_nav"
        class="bg-gray-200 w-full font-bold nav flex flex-wrap flex-col py-2 px-4 justify-between g-4 text-xl" v-if="nav_links_active === true">
      <router-link to="/" class="hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-cyan-50">Home</router-link>
      <router-link to="/announcements" class="hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-cyan-50">Announcements</router-link>
      <router-link to="/sermons" class="hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-cyan-50">Sermons</router-link>
      <router-link to="/biblestudy" class="hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-cyan-50">Bible Study</router-link>
      <router-link to="/gallery" class="hover:bg-pink-700 rounded hover:px-2 hover:py-1 hover:text-cyan-50">Gallery</router-link>
    </div>

  </div>


  <div v-if="live_event_active === true" class="">
    <LiveService/>
    <div class="absolute top-3 right-5 z-20 w-fit cursor-pointer bg-black  bottom-0" @click="toggle_live_event">
      <close :color="close_dimensions.color" :dimensions="close_dimensions.dimensions"/>
    </div>
  </div>



</template>


<script>
import LiveService from "@/components/LiveService";
import close from "@/components/svgs/close";

export default {
  name: "Nav",
  data(){
    return {
      top_nav_active : true,
      nav_links_active :false,
      color: '#820e11',
      live_event_active : false,
      close_dimensions : {
        color : 'white',
        dimensions: 'h-10 w-10'
      }
    }
  },
  components: {
    LiveService,
    close
  },
  methods : {
    toggle_nav_links_nav (){
      this.nav_links_active = !this.nav_links_active
    },
    toggle_top_nav (){
      this.top_nav_active = !this.top_nav_active
    },
    toggle_live_event(){
      this.live_event_active = !this.live_event_active
      console.log('live')
    }
  },
  computed : {


  },


}
</script>

<style scoped>

.top_nav {
  background-color: #F5F5F5;
}
.nav {
  /*background-color: #820e11;*/
  color: #920E42;
}


</style>