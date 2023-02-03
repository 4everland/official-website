<template>
  <div id="PriceTable">
    <v-container>
      <div class="main">
        <div class="tag">
          See full feature table
          <v-icon small class="ml-4" color="#979797">mdi-arrow-down</v-icon>
        </div>
        <div class="main-title">
          Free Resources
          <v-icon color="#000000" x-large class="ml-4"
            >mdi-alert-circle-outline</v-icon
          >
        </div>
        <div class="main-content">
          4EVERLAND offers a certain amount of free network bandwidth, build
          minutes, and storage space for each new user until free resources run
          out. Any excess resource consumption will be invoiced according to the
          price details. You could also customize individual purchases based on
          resource consumption.
        </div>
        <v-row>
          <v-col cols="12">
            <table class="item-table">
              <tr>
                <th>Bandwidth</th>
                <th>Build minutes</th>
                <th>IPFS storage</th>
                <th>Arweave storage</th>
              </tr>
              <tr>
                <td>100GB/month</td>
                <td>250Min/month</td>
                <td>6GB-25GB</td>
                <td>100MB-200MB</td>
              </tr>
            </table>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<style lang="less" scoped>
#PriceTable {
  padding: 70px 0;
  .main {
    background-image: url('@/assets/imgs/hosting/top-bg.png');
    background-size: 270px;
    background-position: left top;
    .tag {
      font-size: 18px;
      font-family: 'Ubuntu-Medium', sans-serif;
      font-weight: 500;
      color: #888;
      text-align: center;
      margin-bottom: 76px;
    }
    .main-title {
      font-size: 45px;
      font-family: 'Ubuntu-Bold', sans-serif;
      font-weight: bold;
      color: #000;
      margin-bottom: 16px;
    }
    .main-content {
      font-size: 18px;
      font-family: 'Ubuntu-Medium', sans-serif;
      font-weight: 500;
      color: #000;
      margin-bottom: 44px;
    }
  }
  .item-table {
    width: 100%;
    text-align: center;
    border-top: 1px solid #f2f4f5;
    border-left: 1px solid #f2f4f5;
    font-family: 'Ubuntu-Medium', sans-serif;
    font-size: 15px;
    tr {
      height: 75px;
    }
    th {
      background: #f2f4f5;
      border-right: 1px solid #f2f4f5;
      border-bottom: 1px solid #f2f4f5;
      color: #666;
    }
    td {
      border-right: 1px solid #f2f4f5;
      border-bottom: 1px solid #f2f4f5;
      color: #000;
    }
  }
}
</style>
