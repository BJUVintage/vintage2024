<script lang="ts" setup></script>

<template>
   <h2 lc>{{ name }}</h2>
            
           <p class="smaller">
            {{ verse }}<br>
            {{ motorolla }}
           </p> 
           <br>
      
</template>

<script>
export default {
  name: "society",
  props: {
      name: String,
      verse: String,
      motorolla: String,
      svg: String,
      svgClass: String,
  },
};
</script>

<style lang="scss">
h2 {
    color: #5A493D;
    font-size: larger;
}

.smaller {
    font-size: medium;
}

@import "~/scss/styles.scss", "~/scss/fonts.scss";
</style>
