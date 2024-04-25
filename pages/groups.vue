<script lang="ts" setup></script>

<template>
  <page-title title="Groups" svg="Bird.svg" class="events" svgClass="eventSVG" />

  <basic-layout big-photo-name="/groups/academic.jpg" title="Academic Teams"
    description="Academic teams in robotics, biology and computer programming develop innovative skills and provide valuable competition and career-focused activities outside the classroom. These programs provide students the unique opportunity to work with peers in their specific areas of interest. The team members’ collaboration on year-long projects prepares students to participate in state and nation-wide events. By stimulating teams intellectually and relationally, these challenges develop competency in academics and leadership. "></basic-layout>

  <basic-layout big-photo-name="/groups/vintage.jpg" title="Campus Media"
    description="Bob Jones University offers a variety of media outlets for campus communication. The Vintage staff is excited to celebrate the 90th year of preserving memories of the academic year through photos, copy and design. Each volume of the yearbook, centering on a specific theme, documents student life, academic attainments and faculty and staff recognition. The book also serves as a valuable keepsake for students and alumni. The Collegian, a student-produced newspaper, covers the latest events in University life. This publication, which is available in digital and print formats, highlights student, faculty and University accomplishments. The award-winning weekly newspaper also features current events, faculty interviews and articles designed to engender friendly discussion and debate. "
    big-photo-right></basic-layout>

    <basic-layout big-photo-name="/groups/aquaponic.jpg" title="Research Teams"
    description="STEM courses offer opportunities for students to apply classroom skills in real-world scenarios. Biology, chemistry, and engineering majors, partner with companies to engage in research. These teams sharpen critical thinking, troubleshooting, and data-analysis skills, as well as promote teamwork. This year, the BJU Engineering Department conducted a research project in BJU’s greenhouse. Students and faculty developed an aquaponics system, an arrangement in which twenty-five tilapia feed on plants and thereby allow those plants to flourish. The research project was part of this year’s Global Challenges class project, pursuing “Honduras Sin Hambre” (Honduras Without Hunger). In addition to STEM competitions, biology majors conduct research in BJU’s cancer lab each summer. Lab members not only expand knowledge about cancer but also experience the practical routine of a research career. Students learn to propose and conduct experiments, interpret their results, and communicate their findings in a professional presentation."
    ></basic-layout>

  <basic-layout big-photo-name="/groups/slc.jpg" title="Student Leadership Council"
    description="The Student Leadership Council (SLC), eleven officers nominated by their peers, plans and promotes student body events. SLC members also serve as liaisons between students and the administration. Two main events hosted by the SLC, Spirit Week and Ignite, create unity through recreational activities and praise services. In addition to sponsoring events, the SLC chooses the academic year’s spiritual theme. The 2023-24 theme was “By My Spirit,” a study of Zechariah 4:6."
    little-photo-name="/groups/turkey-bowl-2.jpeg" big-photo-right></basic-layout>


  <basic-layout big-photo-name="/groups/isc.jpg" title="Inter-Society Council"
    description="The Inter-Society Council (ISC) is comprised of student leaders on campus who serve as society presidents, vice-presidents, and chaplains. These students have the opportunity to develop as leaders by influencing their peers and impacting their community for God's glory. The Inter-Society Executive Committee (ISCEC) oversees and organizes ISC events and personally invests in ISC members to equip them for increased leadership effectiveness. The ISCEC includes the ISC directors, assistant directors, and chaplains, as well as the athletic directors, secretary, treasurer, and chorister."></basic-layout>

</template>

<script lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

export default {
  name: "groups",
  data() {
    return {
      groups: [] as ParsedContent[],
    }
  },
  async mounted() {
    this.groups = (await queryContent("/groups").find())[0].groups;
    console.log(this.groups);
  }
}

</script>

<style scoped></style>
