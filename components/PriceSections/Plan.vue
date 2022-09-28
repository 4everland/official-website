<template>
  <div id="PriceTable">
    <v-container>
      <div class="main">
        <div class="main-title">Plan Details</div>
        <v-row>
          <v-col cols="12">
            <table class="item-table" style="table-layout: fixed">
              <tr>
                <th>Full Feature List</th>
                <th>Support</th>
              </tr>
              <tr v-for="item in items" :key="item">
                <td>{{ item }}</td>
                <td>
                  <v-icon color="#4caf50"> mdi-check-circle </v-icon>
                </td>
              </tr>
            </table>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        'Bandwidth',
        'Storage',
        'Build Minutes',
        'Global Edge Network',
        'DDoS Mitigation',
        'Free SSL',
        'IPFS',
        'Statistics',
        'Community Support',
        'Email Support',
      ],
    }
  },
}
</script>
<style lang="less" scoped>
#PriceTable {
  padding: 70px 0;
  .main {
    .main-title {
      font-size: 45px;
      font-family: 'Ubuntu-Bold', sans-serif;
      font-weight: bold;
      color: #000;
      margin-bottom: 35px;
      text-align: center;
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
