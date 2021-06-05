<template>
 <transition tag="div" name="slide-right" appear>
   <div v-if="show" class="info-label" @click="show=false">
     <div class="p-4">
       <p>Try 'drag & drop'<br>Customize your tasks, good luck!</p>
       <p class="text-sm">written by
         <a
           class="underline text-blue-lighter"
           href="https://github.com/ic3top"
           target="_blank"
           @click.stop
         >
           ic3top
         </a>
       </p>
     </div>
     <div class="flex">
       <button class="info-label-button" @click="hideForever">
         &larr; Don't show again
       </button>
     </div>
   </div>
 </transition>
</template>

<script>
export default {
  name: 'InfoLabel',
  data() {
    return {
      show: JSON.parse(localStorage.getItem('showLabel')) ?? true,
    };
  },
  methods: {
    hideForever() {
      localStorage.setItem('showLabel', JSON.stringify(false));
    },
  },
};
</script>

<style scoped>
.info-label {
  @apply absolute bottom-10 shadow-md text-center text-white text-lg cursor-pointer rounded-r-xl;
  background-color: rgba(34, 33, 33, 0.4);
}

.info-label-button {
  @apply text-sm p-2 rounded-full ml-auto focus:outline-none hover:text-blue-lighter;
}
</style>
