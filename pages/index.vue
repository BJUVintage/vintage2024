<script lang="ts" setup></script>

<template>
  <div class="VINTAGE">
    <img src="~/assets/svgs/Title.svg" alt="VINTAGE" />
    <!-- <img src="~/assets/svgs/Sword.svg" style="position: absolute; left: -39; top: -39" height="100px" alt="" /> -->
    <div class="trapezoid">
      <h2 class="center">2024</h2>
    </div>
  </div>

  <p class="verse">
    Thou comest to me with a sword, and with a spear,<br>
    and with a shield: but I come to thee in the <br><span>name
      of the Lord of hosts.</span>
  </p>
  <p id="reference">I SAMUEL 17:45</p>

  <div class="spacer" />

  <events-mini />
  <groups-mini />
  <search-mini />
</template>

<script>
import EventsMini from "~~/components/EventsMini.vue";

export default {
  components: { EventsMini },
};
</script>

<style lang="scss">
@import "~/scss/styles.scss", "~/scss/fonts.scss";
</style>
