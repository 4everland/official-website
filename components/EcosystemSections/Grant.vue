<template>
  <div id="Grants">
    <div class="grant">
      <v-container>
        <v-row class="grant-box">
          <v-col cols="12" md="4" class="tit-box">
            <div class="emp-title">Empowered Your Web 3.0 Development</div>
            <div class="emp-tips">
              You can receive a 4EVERLAND support plan from the 4EVERLAND Pro
              Program. Come with us to make a significant contribution to Web
              3.0.
            </div>
          </v-col>
          <v-col
            cols="12"
            md="4"
            class="d-flex justify-center justify-sm-center justify-md-end"
          >
            <div class="grant-item">
              <div class="item-title">Grants Program</div>
              <div class="item-tips">
                4EVERLAND's Dev-Grants Program aims to ensure developers make a
                smooth leap from Web 2.0 to Web 3.0 along with rapid Web.3.0
                development. We believe that your contribution, in the long run,
                will receive huge value.
              </div>
              <v-btn
                class="font-weight-bold mt-6"
                rounded
                color="#fff"
                href="https://www.4everland.org/grants"
                target="_blank"
                >Submit</v-btn
              >
            </div>
          </v-col>
          <v-col
            cols="12"
            md="4"
            class="d-flex justify-center justify-sm-center justify-md-end"
          >
            <div class="grant-item contributor-item">
              <div class="item-title">Contributor Program</div>
              <div class="item-tips">
                4EVERLAND Community Contributor Program aims to encourage more
                users to get involved in our community development! This program
                is user-centered, thus join us and build a super Web 3.0
                community together!
              </div>
              <v-btn
                class="font-weight-bold mt-6"
                rounded
                color="#fff"
                href="https://4everland.notion.site/Welcome-to-4EVERLAND-Community-Contributor-Program-Beta-0aff3e02be5b4694ae55367cf8b9f4e3"
                target="_blank"
                >Submit</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultType: 'DeFi',
    }
  },
}
</script>
<style lang="less" scoped>
#Grants {
  padding-bottom: 212px;
  border-bottom: 1px solid #d0dae9;
  .grant {
    background-image: url('@/assets/imgs/ecosystem/bg.png');
    background-size: cover;
    height: 450px;

    &-box {
      .tit-box {
        margin-top: 125px;

        .emp-title {
          font-size: 27px;
          font-weight: bold;
          color: #2d2d2d;
          font-family: 'BookmanOldStyle-Bold', sans-serif !important;
        }
        .emp-tips {
          font-size: 14px;
          color: #2d2d2d;
          margin-top: 20px;
          font-family: 'Ubuntu', sans-serif !important;
        }
      }

      .grant-item {
        width: 338px;
        height: 450px;
        border-radius: 11px;
        background-image: url('@/assets/imgs/ecosystem/Grants.png');
        background-size: contain;
        padding: 0 30px;
        padding-top: 54px;
        margin-top: 95px;
        .item-title {
          font-size: 20px;
          font-weight: bold;
          color: #fff;
          font-family: 'BookmanOldStyle-Bold', sans-serif !important;
        }
        .item-tips {
          font-size: 14px;
          color: #fff;
          margin-top: 20px;
          font-family: 'Ubuntu', sans-serif !important;
        }
      }
      .contributor-item {
        background-image: url('@/assets/imgs/ecosystem/Contributor.png');
      }
    }
  }
}
@media screen and (max-width: 960px) {
  #Grants {
    padding-bottom: 0;
    .grant {
      height: auto;
    }
    .grant-item {
      margin-top: 20px !important;
    }
  }
}
</style>
