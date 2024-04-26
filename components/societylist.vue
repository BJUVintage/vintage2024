<template>
  <div :class="bigPhotoRight ? 'basic-layout-right' : 'basic-layout-left'">
    <div class="flex-container">

      <div v-if="title=='Men\'s Societies'"  class="text-container">
        <h1>{{ title }}</h1>
        <ul>
            <society name="ALPHA OMEGA DELTA • LIONS" verse="2 Timothy 1:7" motorolla="Christ Is All"></society>
            <society name="ALPHA THETA PI • RAZORBACKS" verse="Ephesians 6:16" motorolla="Taking the Shield of Faith"></society>
            <society name="BASILEAN • EAGLES" verse="Isaiah 40:31" motorolla="Royalty in Christ"></society>
            <society name="BETA GAMMA DELTA • PATRIOTS" verse="Philippians 3:13-14" motorolla="Liberty in Christ"></society>
            <society name="BRYAN • BEARS" verse="Colossians 1:18" motorolla="In All Things Christ"></society>
            <society name="CHI ALPHA PI • CAVALIERS" verse="Proverbs 3:5-6" motorolla="Christ Always Preeminent"></society>
            <society name="CHI EPSILON DELTA • WOLVES" verse="Psalm 62:7-8" motorolla="Christ Is Power"></society>
            <society name="EPSILON ZETA CHI • TORNADOES" verse="Colossians 1:10" motorolla="To Me to Live is Christ"></society>
            <society name="KAPPA SIGMA CHI • KNIGHTS" verse="2 Timothy 2:3-4" motorolla="Good Soldiers of Christ"></society>
            <society name="LANIER • FALCONS" verse="Colossians 3:1" motorolla="Seeking Things Above"></society>
            <society name="NU DELTA CHI • VIKINGS" verse="Romans 8:37" motorolla="We Are More Than Conquerors"></society>
            <society name="PHI BETA CHI • BULLDOGS" verse="Colossians 1:18" motorolla="The World Reveals Christ"></society>
            <society name="PHI KAPPA PI • RAMS" verse="Colossians 1:28" motorolla="Making the Master Manifest"></society>
            <society name="PI GAMMA DELTA • ROYALS" verse="Joshua 1:9" motorolla="His Will, Our Desire"></society>
            <society name="PI KAPPA SIGMA • COBRAS" verse="1 Corinthians 16:13-14" motorolla="He Must Increase, But I Must Decrease"></society>
            <society name="SIGMA ALPHA CHI • SPARTANS" verse="2 Timothy 2:3" motorolla="Soldiers Begin With Christ"></society>
            <society name="THETA KAPPA CHI • STALLIONS" verse="2 Corinthians 10:31" motorolla="Omnia Ad Dei Gloriam"></society>
        </ul>
      </div>

      <div v-if="title=='Women\'s Societies'"  class="text-container">
        <h1>{{ title }}</h1>
        <ul>
            <li> </li>
        </ul>
      </div>


      <div class="img-container" v-if="bigPhotoName">
        <img :src="`/_nuxt/assets/photos/${bigPhotoName}`" />
      </div>

      <div class="img-container" v-if="bigPhotoNameElectricBoogola">
        <img :src="`/_nuxt/assets/photos/${bigPhotoNameElectricBoogola}`" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "societylist",
  props: {
    bigPhotoName: String, default: "",
    bigPhotoNameElectricBoogola: String, default: "",
    title: String, default: "",
    bigPhotoRight: Boolean, default: false,
  },
};
</script>

<style lang="scss">
@import "~/scss/styles.scss", "~/scss/fonts.scss";
</style>
