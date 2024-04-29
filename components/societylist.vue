<template>
  <div class="flex-container">
    <div class="centermepls">
      <div v-if="title == 'Men\'s Societies'" class="text-container">
        <h1>Men's Societies</h1>
        <society name="ALPHA OMEGA DELTA • LIONS" verse="2 Timothy 1:7" motorolla="Christ Is All"></society>
        <society name="ALPHA THETA PI • RAZORBACKS" verse="Ephesians 6:16" motorolla="Taking the Shield of Faith">
        </society>
        <society name="BASILEAN • EAGLES" verse="Isaiah 40:31" motorolla="Royalty in Christ"></society>
        <society name="BETA GAMMA DELTA • PATRIOTS" verse="Philippians 3:13-14" motorolla="Liberty in Christ">
        </society>
        <society name="BRYAN • BEARS" verse="Colossians 1:18" motorolla="In All Things Christ"></society>
        <society name="CHI ALPHA PI • CAVALIERS" verse="Proverbs 3:5-6" motorolla="Christ Always Preeminent">
        </society>
        <society name="CHI EPSILON DELTA • WOLVES" verse="Psalm 62:7-8" motorolla="Christ Is Power"></society>
        <society name="EPSILON ZETA CHI • TORNADOES" verse="Colossians 1:10" motorolla="To Me to Live is Christ">
        </society>
        <society name="KAPPA SIGMA CHI • KNIGHTS" verse="2 Timothy 2:3-4" motorolla="Good Soldiers of Christ">
        </society>
        <society name="LANIER • FALCONS" verse="Colossians 3:1" motorolla="Seeking Things Above"></society>
        <society name="NU DELTA CHI • VIKINGS" verse="Romans 8:37" motorolla="We Are More Than Conquerors"></society>
        <society name="PHI BETA CHI • BULLDOGS" verse="Colossians 1:18" motorolla="The World Reveals Christ">
        </society>
        <society name="PHI KAPPA PI • RAMS" verse="Colossians 1:28" motorolla="Making the Master Manifest"></society>
        <society name="PI GAMMA DELTA • ROYALS" verse="Joshua 1:9" motorolla="His Will, Our Desire"></society>
        <society name="PI KAPPA SIGMA • COBRAS" verse="1 Corinthians 16:13-14"
          motorolla="He Must Increase, But I Must Decrease"></society>
        <society name="SIGMA ALPHA CHI • SPARTANS" verse="2 Timothy 2:3" motorolla="Soldiers Begin With Christ">
        </society>
        <society name="THETA KAPPA CHI • STALLIONS" verse="2 Corinthians 10:31" motorolla="Omnia Ad Dei Gloriam">
        </society>
      </div>
      <br>
      <div v-if="title == 'Women\'s Societies'" class="text-container">
        <h1>Women's Societies</h1>
        <society name="ALPHA SIGMA OMICRON • AMBASSADORS" verse="2 Corinithians 5:20" motorolla="Always Serving Others">
        </society>
        <society name="BETA CHI OMEGA • BEAR CUBS" verse="Deuteronomy 30:20a"
          motorolla="Becoming Like Christ Through Obedience">
        </society>
        <society name="BETA EPSILON CHI • CARDINALS" verse="Galations 2:20" motorolla="Being Ever Christlike"></society>
        <society name="CHI KAPPA DELTA • DRAGONS" verse="Hebrews 12:1-2" motorolla="Christ's Messengers to the World">
        </society>
        <society name="CHI THETA UPSILON • GATORS" verse="Proverbs 3:26" motorolla="Christ Our Confidence"></society>
        <society name="NU ALPHA PHI • FLAMES" verse="1 John 1:7" motorolla="Live Life More Abundantly">
        </society>
        <society name="PI DELTA CHI • CLASSICS" verse="Romans 14:8" motorolla="Always Serving Christ"></society>
        <society name="SIGMA LAMBDA DELTA • DUSKIES" verse="Matthew 6:33" motorolla="Magnifying Christ">
        </society>
        <society name="TAU DELTA CHI • KANGAROOS" verse="Philippians 3:13b-14"
          motorolla="Never Looking Back, Excellence Our Goal">
        </society>
        <society name="THETA ALPHA CHI • OWLS" verse="Romans 8:38-39" motorolla="God's Love Inseparable"></society>
        <society name="THETA DELTA OMICRON • TIGERS" verse="2 Corinithians 2:14"
          motorolla="Because I Have Spent Time With You, I am Closer To Our God"></society>
        <society name="THETA MU THETA • BANDITS" verse="Galations 6:14" motorolla="See Only God">
        </society>
        <society name="THETA SIGMA CHI • COLTS" verse="Philippians 3:10" motorolla="Together Serving Christ"></society>
        <society name="TRI EPSILON • PIRATES" verse="" motorolla="Elevating Eternal Excellence"></society>
        <society name="ZETA TAU OMEGA • SEAGULLS" verse="2 Corinthians 4:6" motorolla="Zealous, True, Obedient">
        </society>
        <society name="ZOE ALETHIA • WILDCATS" verse="John 14:6" motorolla="Invest, Encourage, Edify">
        </society>
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
h1 {
  color: #5A493D;
  font-size: xx-large;
}

.centermepls {
  text-align: center;
}

@import "~/scss/styles.scss", "~/scss/fonts.scss";
</style>
