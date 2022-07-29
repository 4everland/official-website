<template>
  <div id="IpfsAbout">
    <v-container class="py-16">
      <div
        class="text-h4 font-weight-bold text-center mb-6"
        style="color: #132642"
      >
        The way what works best for you
      </div>
      <v-row class="mt-16">
        <v-col
          v-for="(item, index) in list"
          :key="index"
          class="py-6"
          cols="12"
          md="4"
        >
          <div class="about-item ma-auto" :class="'about-item-' + index">
            <div class="item-title">
              {{ item.title }}
            </div>
            <div class="item-tips">
              {{ item.tips }}
            </div>
            <div class="item-info">
              <div class="info-item">
                <span class="info-key">Bandwidth</span>
                <span class="info-value">{{ item.bandwidth }}</span>
              </div>
              <div class="info-item">
                <span class="info-key">Storage IPFS</span>
                <span class="info-value">{{ item.storageIPFS }}</span>
              </div>
              <div class="info-item">
                <span class="info-key">Storage Ar</span>
                <span class="info-value">{{ item.storageAr }}</span>
              </div>
              <div class="info-item">
                <span class="info-key">Build Minutes</span>
                <span class="info-value">{{ item.buildMinutes }}</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: 'Free',
          tips: 'For both non-commercial and personal projects',
          bandwidth: '100GB per month',
          storageIPFS: '4GB',
          storageAr: '100MB',
          buildMinutes: '250Min per month',
        },
        {
          title: 'Purchase',
          tips: 'For medium-sized, and fast-growing projects',
          bandwidth: '12.6USD/100GB',
          storageIPFS: '12USD/100GB/Mon',
          storageAr: '10USD/1GB',
          buildMinutes: '0.32USD/100Min',
        },
        {
          title: 'Recharge',
          tips: 'More flexible fee forms',
          bandwidth: '0.126USD/GB',
          storageIPFS: '0.004USD/GB/Day',
          storageAr: '-',
          buildMinutes: '0.0032USD/Min',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.about-item {
  width: 338px;
  height: 384px;
  border-radius: 11px;
  padding: 28px 32px;
  .item-title {
    color: #132642;
    font-size: 20px;
    font-weight: bold;
  }
  .item-tips {
    color: #6c7789;
    font-size: 10px;
  }
  .item-info {
    margin-top: 43px;
    .info-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 25px;
      .info-key {
        font-size: 14px;
        color: #757d88;
        font-weight: bold;
      }
      .info-value {
        font-size: 14px;
        color: #132642;
        font-weight: bold;
      }
    }
  }
}
.about-item-0 {
  background: linear-gradient(180deg, #e0f9ff, #fff);
}
.about-item-1 {
  background: linear-gradient(180deg, #d2f6f4, #d7fff8, #fff);
}
.about-item-2 {
  background: linear-gradient(180deg, #e7eaff, #fff);
}
</style>
