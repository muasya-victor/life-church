<template>
  <div class="home">
    <div>
      <SliderRevolution/>
    </div>

    <div class="mt-2">
      <hr>
      <GalleryItem/>
      <hr>
    </div>

    <div class="mt-2 flex flex-col items-center ">
      <PageButton text="Sermons"/>
      <Sermons/>
      <hr>
    </div>

    <div class="mt-2 flex flex-col items-center ">
      <router-link to="/announcements/"><PageButton text="Announcements"/></router-link>
      <Events/>
      <hr>
    </div>


  </div>

</template>

<script>
import SliderRevolution from "@/components/SliderRevolution";
import GalleryItem from "@/components/GalleryItem";
import Sermons from "@/views/Sermons";
import Events from "@/components/Events";
import PageButton from "@/components/buttons/PageButton";


export default {
  name: 'HomeView',
  components: {
    SliderRevolution,
    GalleryItem,
    Sermons,
    Events,
    PageButton
  }
}
</script>
