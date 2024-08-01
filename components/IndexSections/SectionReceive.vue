<template>
  <v-container fluid class="main-container">
    <v-divider color="#474747" />
    <v-row justify="center" align="center" class="text-left mt-6 mb-6">
      <v-col cols="12" sm="6">
        <h6 class="white--text text-h6 font-weight-bold">
          Receive transmissions
        </h6>
        <p class="white--text mt-4">
          Join 300,000+ builders and stay up to date with our latest updates and
          news.
        </p>
      </v-col>
      <v-col cols="12" sm="6" class="text-right">
        <div class="email-input pl-4 pr-2">
          <!-- <v-row align="center"> -->
          <div>
            <v-icon color="#FFF">mdi-email-outline </v-icon>
          </div>
          <v-col cols="12" md="6">
            <v-text-field
              label="Your Email"
              variant="solo"
              hide-details
              single-line
              class="white-label"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn color="#6172F3"> Subscribe </v-btn>
          </v-col>
          <!-- </v-row> -->
        </div>
      </v-col>
    </v-row>
    <v-divider color="#474747" />
  </v-container>
</template>

<script>
export default {
  name: 'NetworkStructure',
  data: () => ({
    inputValue: '',
  }),
  methods: {},
}
</script>

<style scoped>
.main-container {
  padding: 64px 80px;
  max-width: 100%;
}
.email-input {
  width: 80%;
  height: 56px;
  line-height: 56px;
  border: 1px solid #6172f3;
  border-radius: 40px;
  display: flex;
  align-items: center;
}
.v-text-field {
  margin-top: 0 !important;
  padding: 0 !important;
}
.v-btn {
  color: #fff;
  border-radius: 20px;
}
.white-label .v-label {
  color: white !important;
}
@media (max-width: 960px) {
  .email-input {
    width: 100%;
  }
}
</style>
