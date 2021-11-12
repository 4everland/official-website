<template>
  <div>
    <h2>Grantee Use Cases</h2>
    <v-row>
      <v-col v-for="(it, i) in granteeList" :key="i" cols="6" md="3">
        <div class="bd-1 bg-black">
          <div class="d-flex al-c pa-3">
            <div class="bdrs-100 shrink-0 ov-h">
              <v-img
                width="40"
                src="https://hosting.4everland.org/img/icon/tever.jpg"
              ></v-img>
            </div>
            <div class="ml-2 lh-1">
              <div class="fw-b">{{ it.title }}</div>
              <div class="mt-1 fz-14">
                {{ it.intro }}
              </div>
            </div>
          </div>

          <v-img
            height="120"
            src="https://hosting.4everland.org/img/empty/cover.jpg"
          ></v-img>

          <div class="pa-3 fz-14">
            {{ it.desc }}
          </div>
        </div>
      </v-col>
    </v-row>

    <h2>Application Process</h2>
    <process></process>

    <h2>Are you ready?</h2>
    <div class="label-1 fz-14">
      <div>Individuals, teams and researchers</div>
      <div class="mt-1">are all welcome to submit applications.</div>
    </div>
  </div>
</template>

<script>
import Process from './GrantProcess.vue'

export default {
  components: {
    Process,
  },
  data() {
    return {
      granteeList: [
        {
          title: '4everland',
          desc: 'test',
          intro: 'test',
          img: '',
        },
      ],
    }
  },
}
</script>
