<script lang="ts" setup></script>

<template>
    <li>
        <ul>
            <li>{{ name }}</li>
            <li>{{ verse }}</li>
            <li>{{ motorolla }}</li>
        </ul>
    </li>
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
@import "~/scss/styles.scss", "~/scss/fonts.scss";
</style>
