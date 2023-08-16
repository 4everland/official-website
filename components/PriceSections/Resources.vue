<template>
  <div id="PriceTable">
    <v-container>
      <div class="main">
        <div class="main-title">
          Resources Pricing
          <v-icon color="#000000" x-large class="ml-4"
            >mdi-alert-circle-outline</v-icon
          >
        </div>
        <div class="main-content">
          The following billing standard applies to both the direct purchase of
          resources (upfront) and wallet balance debit (postpaid) - Global users
        </div>
        <v-row>
          <v-col cols="12">
            <table class="item-table">
              <tr>
                <th>Resource</th>
                <th>Type</th>
                <th>Specification</th>
                <th>Standard Pricing</th>
              </tr>
              <tr>
                <td rowspan="2">Bandwidth</td>
                <td rowspan="2">Bandwidth</td>
                <td>0-100GB</td>
                <td>Free/Month</td>
              </tr>
              <tr>
                <td>100GB+</td>
                <td>$10/100G</td>
              </tr>
              <tr>
                <td rowspan="2">Build minutes</td>
                <td rowspan="2">Build minutes</td>
                <td>0-250Min</td>
                <td>Free/Month</td>
              </tr>
              <tr>
                <td>250Min+</td>
                <td>$3/100Min</td>
              </tr>
              <tr>
                <td rowspan="2">IPFS</td>
                <td>Storage</td>
                <td>1GB+</td>
                <td>$8/100G/Month</td>
              </tr>

              <tr>
                <td>Storage duration</td>
                <td>1 Months+</td>
                <td>Settlement method</td>
              </tr>
              <tr>
                <td rowspan="2">Arweave</td>
                <td rowspan="2">Storage</td>
                <td>0-100MB</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>100MB+</td>
                <td>≈$0.55</td>
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
