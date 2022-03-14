<template>
  <div id="faq" class="home-block">
    <v-container class="my-16 py-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel ma-auto mb-16" style="max-width: 1100px">
            FAQ
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-expansion-panels accordion :flat="true" class="list-box">
          <v-expansion-panel class="list-item">
            <v-expansion-panel-header class="text-h6">
              1. What is 4EVERLAND?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              4EVERLAND is a Web 3.0 cloud computing platform with global
              acceleration, privacy protection, distributed storage, and other
              technical features, based on IPFS and the underlying technology of
              Ethereum.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="list-item">
            <v-expansion-panel-header class="text-h6">
              2. What is HOSTING?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              4EVERLAND-HOSTING is a developer application that helps developers
              to quickly build, publish and manage DWebs. Developers can quickly
              deploy web application resources to 4EVERLAND's network as a DWeb
              through a visual interface (Hosting App) or command line
              (@4everland/ cli). All 4EVERLAND nodes and gateways can provide
              persistent storage for the DWeb, and all gateways can provide DWeb
              access acceleration. Developers can implement a hosted Dweb based
              on Web 3.0 in the 30s.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="list-item">
            <v-expansion-panel-header class="text-h6">
              3. What are the advantages of using HOSTING?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul>
                <li>
                  Globally Acceleration: The consensus-driven Swarm network,
                  improves network throughput massively and high availability,
                  provides more efficient and fast Web3.0 access for global
                  developers.
                </li>
                <li>
                  Privacy Protection: 4EVERLAND does not require KYC, that
                  ensures user anonymity and data security.
                </li>
                <li>
                  Distributed Storage: 4EVERLAND builds a Swarm distributed
                  storage network to achieve data availability and reliability.
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="list-item">
            <v-expansion-panel-header class="text-h6">
              4. What is the process of building a DWeb through HOSTING?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ol>
                <li>Authorize login through GitHub account.</li>
                <li>Select a GitHub repository.</li>
                <li>
                  Automatically identify the framework or select the commonly
                  used framework and customize the build command and output-dir.
                </li>
                <li>
                  When deploying, the hosting App provides a building service
                  that automatically executes Clone, Install, Build and Upload.
                </li>
                <li>
                  Users are provided with a free domain name by 4EVERLAND, which
                  is configured with DDNS by default and can access the newly
                  released Web 3.0 through this domain name. One can access the
                  newly released Web 3.0 site through this domain name or
                  customize the DNS or ENS settings.
                </li>
              </ol>
              <div>
                Check out our docs:
                <a href="https://docs.hosting.4everland.org" target="_blank"
                  >https://docs.hosting.4everland.org</a
                >
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="list-item">
            <v-expansion-panel-header class="text-h6">
              5. How to bind custom domain?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A free and SSL-enabled domain will be automatically generated as
              soon as deployment is successful. If you have your own domain
              name, you can also connect it to your site. Check our tutorial
              video:
              <a
                href="https://www.youtube.com/watch?v=yiKjf-GwaGg"
                target="_blank"
                >https://www.youtube.com/watch?v=yiKjf-GwaGg</a
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import '@/assets/styles/home.scss'
export default {
  data() {
    return {}
  },
}
</script>
<style scoped>
#faq {
  background-color: #ecf6fd;
}
.list-box {
  background-color: #ecf6fd;
  max-width: 1200px;
  margin: 0 auto;
}
.list-item {
  background-color: #ecf6fd !important;
  color: #333 !important;
  font-size: 18px !important;
}
</style>
