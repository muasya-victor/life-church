<template>

  <div class="flex flex-col items-center py-10 lg:px-10 " >

    <div>
      <h1 class="font-serif font-thin italic text-pink-900 text-2xl">
        welcome to life church limuru
      </h1>
    </div>
    <h1 class="text-2xl py-8 font-bold text-pink-900">Sermons</h1>


    <div class="bg-green-500" @click="getter">
    </div>
    <div class="flex flex-wrap gap-4 justify-around px-8 mx-auto items-center w-full ">

      <div class=" h-80 w-80 flex flex-col items-center shadow shadow-gray-500 "
           v-for="video in videos" key="video.snippet.channelId">

        <div class="w-fit h-fit relative">
          <img :src="video.snippet.thumbnails.high.url" class="h-full min-w-full rounded  ">

          <!---------------------- play button -------------------------          -->
          <div class="bg-pink-900  h-fit hover:bg-pink-700 absolute top-1/2 right-1/2 " @click="toggle_sermon(video.snippet.thumbnails.default.url)">
            <play :color="color" :dimension="dimensions"/>
          </div>
        </div>

                  <!--        {{ video.snippet.thumbnails.default.url }}-->

        <!------------------------ video description ------------------------------->
        <div class="p-4">
          <h1 class="font-bold flex justify-start">
            {{video.snippet.title}}
          </h1>

        </div>



      </div>

    </div>

    <!--------------------------  pop up ---------------------------------------------------------   -->
    <div class=" absolute  almost_transparent h-screen w-screen z-20 top-0 rounded flex items-center"
         v-if="active_sermon===true">

      <div class="w-full h-5/6 mx-auto rounded p-3 bg-black">
        <iframe class="w-full h-full"

        :src="'http://www.youtube.com/embed/'+video_id"
        >
        </iframe>
      </div>
      <!--        :src="'http://www.youtube.com/embed/'+'LKONbYLK7mY'"-->
      <!-------------------------------close button ------------------------------------------------      -->
      <div class="w-fit h-fit" @click="toggle_sermon">
        <close :color="color" :dimensions="dimensions"/>
      </div>

    </div>
  </div>


</template>

<script>
import axios from 'axios'

import play from "@/components/svgs/play";
import close from "@/components/svgs/close";
export default {
  name: "Sermons",
  components : {
    play,
    close
  },
  data (){
    return {
      video_error_message : String,
      json_error : String,
      data : [],
      videos : [],
      color: 'white',
      dimensions : 'h-10 w-10',
      active_sermon : false,
      video_id: ''
    }
  },
  methods : {
    getter(){
      console.log( this.data.data.items.length )
    },
    toggle_sermon(id){
      this.active_sermon = !this.active_sermon
      window.scrollTo(0, 0)
      const text = id
      const myArray = text.split("/")
      this.video_id = myArray[4]
      console.log(myArray[4])
      console.log(myArray)
    }
  },
  mounted (){
    axios.get(
        'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=' +
        'UCzPPMLkABj4gmBEALPblhVw&maxResults=100&key=AIzaSyATajvYODjp-HgBmAhiayeca2Q0eieTK2A'
    ).then(response => {
      (this.data = response)
      this.videos = this.data.data.items
    } )
  },
}
</script>

<style scoped>
.almost_transparent {
  background-color: rgba(0,0,0,.5);
}
</style>