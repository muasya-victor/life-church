<template>
    <div class="w-3/4 mx-auto bg-gray-50 mb-2 h-fit">
      <div class="py-8 flex flex-col items-center">
        <div class="grid sm:grid-flow-col p-4 w-2/3 border-b mx-auto">

          <div>
            <h1 class="text-xl flex justify-center">
              Channel your offerings and tithes through :
            </h1>
          </div>
        </div>
        <h3 class="text-pink-900 font-mono">
          Wave/Remit/M-pesa No:0726714713
        </h3>
        <h3 class="text-pink-900 font-mono">
          M-pesa Till no. 325959
        </h3>

      </div>

    </div>
</template>

<script>
import PageButton from "@/components/buttons/PageButton";
export default {
  name: "Events",
  data (){
    return {
      i : 4
    }
  },
  components : {
    PageButton
  }
}
</script>

<style scoped>

</style>