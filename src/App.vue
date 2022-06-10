<template>
<div class="bg-gray-50 relative">

  <div class="">
    <Nav/>
  </div>


  <div>
    <router-view/>
  </div>

<!--  <Footer/>-->
</div>

</template>


<!--my youtube api key-->
<!--AIzaSyATajvYODjp-HgBmAhiayeca2Q0eieTK2A-->

<!--channel id -->
<!--UCzPPMLkABj4gmBEALPblhVw-->
<script>

import { ref } from 'vue'
import Nav from "@/components/NavigationBars/Nav";
import Footer from "@/components/NavigationBars/Footer";
import SliderRevolution from "@/components/SliderRevolution";

export default {
  components: {SliderRevolution, Footer, Nav},
  data (){
    return {
      components : {
        Nav,
        Footer,
        SliderRevolution
    }


    }
  },
  setup (){
    const component = ref(
        [
          Nav,
          Footer
        ]
    )



    return {
    component
    }

  }
}
</script>
<style>

</style>