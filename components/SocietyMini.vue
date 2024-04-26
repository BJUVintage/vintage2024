<script lang="ts" setup></script>

<template>
  <page-title title="Societies" svg="Bird.svg" class="societies" svgClass="eventSVG" />
  <basic-layout big-photo-name="/events/welcome.jpg" title="Welcome Week"
    description="Welcome Week introduced the Class of 2027, BJU’s 100th graduating class, to campus life. With wide eyes and smiles, many in the freshman class began the college experience by moving into the residence halls. The Welcome Week theme—OWN IT—encouraged students to accept personal responsibility for their studies, personal relationships, and spiritual growth. The week sponsored “meet and greet” sessions for academic majors, orientation for new students, and special sessions for international students. Opening exercises and evangelistic meetings established the foundation for a successful year. "
    button-page="societies" button-text="All Societies" big-photo-right is-mini></basic-layout>
  <societylist big-photo-name="/events/welcome.jpg" title="Welcome Week"></societylist>
</template>

<script>
export default {
  name: "SocietiesMini",
};
</script>

<style lang="scss">
@import "~/scss/styles.scss", "~/scss/fonts.scss";
</style>
