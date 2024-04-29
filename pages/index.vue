<script lang="ts" setup></script>

<template>
  <div class="VINTAGE">
    <img src="~/assets/svgs/Title.svg" alt="VINTAGE" />
    <img :src="cornerImages[topLeftIndex]" alt="Top Left" class="corner top-left" />
    <img :src="cornerImages[topRightIndex]" alt="Top Right" class="corner top-right" />
    <img :src="cornerImages[bottomLeftIndex]" alt="Bottom Left" class="corner bottom-left" />
    <img :src="cornerImages[bottomRightIndex]" alt="Bottom Right" class="corner bottom-right" />
    <div class="trapezoid">
      <h2 class="center">2024</h2>
    </div>
  </div>

  <div>
    <p class="verse"><img class="interesting" :src="selectedVerse.img" width="200px">
    <h2>{{ selectedVerse.name }}</h2><br>{{ selectedVerse.verse }}</p>
    <p id="reference">{{ selectedVerse.reference }}</p>
  </div>

  <div class="spacer" />

  <events-mini />
  <groups-mini />
</template>

<script>
export default {
  data() {
    return {
      cornerImages: [
        "_nuxt/assets/svgs/Icon-1.svg",
        "_nuxt/assets/svgs/Icon-2.svg",
        "_nuxt/assets/svgs/Icon-3.svg",
        "_nuxt/assets/svgs/Icon-4.svg",
        "_nuxt/assets/svgs/Icon-5.svg",
        "_nuxt/assets/svgs/Icon-6.svg",
        "_nuxt/assets/svgs/Icon-7.svg",
        "_nuxt/assets/svgs/Icon-8.svg",
      ],

      topLeftIndex: 0,
      topRightIndex: 0,
      bottomLeftIndex: 0,
      bottomRightIndex: 0,
      verses: [
        {
          verse: "Thou comest to me with a sword, and with a spear, and with a shield: but I come to thee in the name of the Lord of hosts.",
          reference: "I SAMUEL 17:45",
          name: "YAHWEH-SABOATH",
          img: "_nuxt/assets/svgs/Icon-1.svg",

        },
        {
          verse: "Before the mountains were brought forth, or ever thou hadst formed the earth and the world, even from everlasting to everlasting, thou art God.",
          reference: "PSALM 90:2",
          name: "EL-OLAM",
          img: "_nuxt/assets/svgs/Icon-2.svg",

        },
        {
          verse: "And when all the men of the tower of Shechem heard that, they entered into an hold of the house of the god Berith.",
          reference: "JUDGES 9:46",
          name: "EL-BERITH",
          img: "_nuxt/assets/svgs/Icon-3.svg",

        },
        {
          verse: "Then Gideon built an altar there unto the Lord, and called it Jehovah-shalom: unto this day it is yet in Ophrah of the Abiezrites.",
          reference: "JUDGES 6:24",
          name: "YAHWEH-SHALOM",
          img: "_nuxt/assets/svgs/Icon-4.svg",

        },
        {
          verse: "And Abraham called the name of that place Jehovah-jireh: as it is said to this day, In the mount of the Lord it shall be seen.",
          reference: "GENESIS 22:14",
          name: "JEHOVAH-JIREH",
          img: "_nuxt/assets/svgs/Icon-5.svg",

        },
        {
          verse: "The Lord is my shepherd; I shall not want.",
          reference: "PSALM 23:1",
          name: "YAHWEH-ROHI",
          img: "_nuxt/assets/svgs/Icon-6.svg",

        },
        {
          verse: "And she called the name of the Lord that spake unto her, Thou God seest me: for she said, Have I also here looked after him that seeth me?",
          reference: "GENESIS 16:3",
          name: "EL-ROI",
          img: "_nuxt/assets/svgs/Icon-7.svg",

        },

      ],
      selectedVerse: {},

    };
  },
  created() {
    this.setRandomIndices();
    this.selectRandomVerse();
  },
  methods: {
    setRandomIndices() {
      const indices = this.getRandomIndices(4, this.cornerImages.length);
      this.topLeftIndex = indices[0];
      this.topRightIndex = indices[1];
      this.bottomLeftIndex = indices[2];
      this.bottomRightIndex = indices[3];
    },
    selectRandomVerse() {
      const randomIndex = Math.floor(Math.random() * this.verses.length);
      this.selectedVerse = this.verses[randomIndex];
    },
    getRandomIndices(numIndices, maxIndex) {
      const indices = [];
      while (indices.length < numIndices) {
        const newIndex = Math.floor(Math.random() * maxIndex);
        if (!indices.includes(newIndex)) {
          indices.push(newIndex);
        }
      }
      return indices;
    }
  }
};
</script>

<style lang="scss">
.interesting {
  filter: invert(27%) sepia(7%) saturate(1606%) hue-rotate(342deg) brightness(97%) contrast(23%);
}

.VINTAGE {
  text-align: center;
  height: calc(100vh - 80px);
  padding: 120px 0;
  background-color: #5A493D;
  color: #E4DAC7;
  margin: 0 0;

  img {
    width: 60vw;
    min-width: 100px;
  }
}

.corner {
  position: absolute;
  width: 151px;
  height: 151px;
}

.top-left {
  top: 85px;
  left: -300px;
}

.top-right {
  top: 85px;
  right: -300px;
}

.bottom-left {
  bottom: 80px;
  left: -300px;
}

.bottom-right {
  bottom: 80px;
  right: -300px;
}


@import "~/scss/styles.scss", "~/scss/fonts.scss";
</style>
