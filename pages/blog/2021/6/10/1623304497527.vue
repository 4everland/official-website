<template>
  <div class="content">
    <div class="service-content">
      <p class="back-text" @click="goback">&lt; Back</p>
      <div class="acticle-view">
        <h1>The technical architecture design of 4EVERLAND</h1>

        <p>
          Based on IPFS and the underlying technology of Ethereum, 4EVERLAND is
          designed to provide a distributed, highly efficient, self-motivated,
          and low-cost data hosting gateway. 4EVERLAND has designed a robust
          architecture to support the stable and efficient operation of the
          entire network, which mainly includes 4EVER-STORAGE, Proof of storage,
          4EVER-GATEWAY, Smart contracts, and 4EVER-HOSTING.
        </p>

        <p><img alt="image" src="/imgs/blog/3.png" /></p>

        <h3>Storage Node (4EVER-STORAGE)</h3>

        <p>
          4EVER-STORAGE is a client containing a synchronization service
          (Cluster Service) and IPFS nodes, is compatible with the IPFS protocol
          and automatically joins a cluster of nodes (Swarm) as a result of the
          Smart Contract module&#39;s node campaign. Nodes can synchronize
          content with each other and store specific content persistently.
        </p>

        <p>
          4EVERLAND forms nodes into a huge storage network through Swarm
          technology, relying on node cooperativeness to achieve persistent
          storage of specific data and supporting horizontal expansion of nodes.
        </p>

        <h3>Proof of storage</h3>

        <p>
          4EVERLAND data layer is a global data synchronization network built on
          IPFS protocol with distributed nodes, the data is constructed and
          synchronized through the Swarm network. The data availability and
          authenticity are the important indicators of 4EVERLAND&#39;s ecosystem
          incentive layer. As a result, 4EVERLAND node Proof of Storage need to
          address the following issues:
        </p>

        <ul>
          <li>
            The nodes do synchronize, and store data submitted by Swarm Network
            users.
          </li>
          <li>
            The data needed by users can be obtained from a 4EVERLAND node at
            any time.
          </li>
        </ul>

        <p>
          Therefore, to address the above issues, 4EVERLAND proposes the PoSC
          based on TEE technology to verify the reliability of node data. The
          challenger can generate a PoSC by randomly combining CIDs, and the
          challenged node needs to respond to the challenge within a specific
          time to prove that the content is indeed stored. The honest node will
          be rewarded while the dishonest node will be penalized.
        </p>

        <p><img alt="image" src="/imgs/blog/4.png" /></p>

        <h3>Gateway node (4EVER-GATEWAY)</h3>

        <p>
          4EVER-GATEWAY helps users select the nearest storage node to access
          4EVERLAND gateway. Gateway node contains the following modules:
        </p>

        <ul>
          <li>
            <p>
              DDNS, or Dynamic DNS, allows developers to simply configure DNS,
              or use the free domain names provided by 4EVERLAND to achieve
              global node acceleration based on 4EVERLAND.
            </p>
          </li>
          <li>
            <p>
              The Data/IO module provides compression processing, content access
              cache acceleration, data transfer optimization and other functions
              for each site.
            </p>
          </li>
          <li>
            <p>
              Cert Manager module provides free HTTPS certificate for each site,
              which saves a lot of time for developers.
            </p>
          </li>
        </ul>

        <h3>Smart contracts</h3>

        <p>
          The smart contract module of 4EVERLAND mainly consists of payment
          contract, bidding contract, lending contract, and governance contract,
          which implement the four core functions of fee payment, node campaign,
          lending, and community governance, respectively. The following section
          explains the core functional design of the smart contracts above.
        </p>

        <p>
          Smart contract module is an important technical solution for 4EVERLAND
          to realize decentralized governance. Through smart contract module,
          nodes can join 4EVERLAND network in an open, transparent, and free
          way, add nodes, modify node revenue, punish malicious nodes through
          decentralized autonomous organization, and finally realize a safe,
          stable, efficient, cooperative and autonomous node cluster.
        </p>

        <p><img alt="image" src="/imgs/blog/5.png" /></p>

        <h3>4EVER-HOSTING5</h3>

        <p>
          4EVER-HOSTING is a developer application, can be accessed from the
          official website of 4EVERLAND. Developers can deploy web application
          resources to the 4EVERLAND gateway as a DWeb through the visual
          interface (Hosting App) or the command (@4everland/cli). All nodes in
          4EVERLAND can provide persistent storage for the DWeb, and all
          gateways can provide access acceleration services for the DWeb.
        </p>

        <p>
          4EVERLAND provides products and protocols such as DWeb hosting,
          decentralized gateway, decentralized domain name, digital marketing
          system, and data services to help developers access Web 3.0 in one
          click.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  created() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {
    goback() {
      window.history.go(-1);
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1280px) {
  .content {
    position: relative;
    top: 1.333333rem;
    width: 100%;
    min-height: 5.333333rem;
    background-color: #1e2226;
  }
  .service-content {
    position: relative;
    width: 9.066667rem;
    min-height: 17.6rem;
    background-color: #fff;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 1.8rem;
    box-sizing: content-box;
  }

  .service-title {
    position: relative;
    margin-top: 61px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 0.64rem;
    text-align: center;
  }
  .service-display {
    position: relative;
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #1e1d1e;
  }
  .tems-address,
  .tems-date {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #1e1d1e;
  }

  .acticle-view {
    position: relative;
    width: 8.533333rem;
    min-height: 12.8rem;
    background: #fff;
    margin: auto;
    margin-top: 40px;
    border-radius: 5px;
    overflow-y: scroll;
    font-size: 12px;
    padding-bottom: 200px;
  }

  .back-text {
    position: relative;
    top: 0.533333rem;
    font-size: 16px;
    color: #7db4dc;
    width: 8.533333rem;
    height: 40px;
    line-height: 40px;
    background: #fff;
    margin: auto;
  }
  .acticle-view img {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 30px;
  }

  .acticle-view h1 {
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0.533333rem;
    line-height: 1.066667rem;
    margin-bottom: 30px;
  }

  .acticle-view p {
    line-height: 20px;
    color: #989898;
    margin-bottom: 30px;
  }

  .acticle-view h3 {
    line-height: 20px;
    color: #989898;
    font-size: 14px;
  }

  .acticle-view strong {
    line-height: 20px;
    color: #989898;
    font-size: 14px;
  }

  .acticle-view li {
    line-height: 20px;
    color: #989898;
    font-size: 14px;
  }
}

@media only screen and (min-width: 1280px) {
  .content {
    position: relative;
    top: 100px;
    width: 100%;
    min-height: 400px;
    background-color: #1e2226;
  }
  .service-content {
    position: relative;
    width: 1200px;
    min-height: 1320px;
    background-color: #fff;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 60px;
    box-sizing: content-box;
  }

  .service-title {
    position: relative;
    margin-top: 61px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 48px;
    text-align: center;
  }
  .service-display {
    position: relative;
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #1e1d1e;
  }
  .tems-address,
  .tems-date {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #1e1d1e;
  }

  .acticle-view {
    position: relative;
    width: 900px;
    min-height: 960px;
    background: #fff;
    margin: auto;
    margin-top: 40px;
    border-radius: 5px;
    font-size: 12px;
    padding-bottom: 200px;
  }

  .back-text {
    position: relative;
    top: 40px;
    font-size: 16px;
    color: #7db4dc;
    width: 900px;
    height: 80px;
    line-height: 80px;
    background: #fff;
    margin: auto;
  }
  .acticle-view img {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 30px;
  }

  .acticle-view h1 {
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0.533333rem;
    line-height: 1.066667rem;
    margin-bottom: 30px;
  }

  .acticle-view p {
    line-height: 20px;
    color: #989898;
    margin-bottom: 30px;
  }

  .acticle-view h3 {
    line-height: 20px;
    color: #989898;
    font-size: 14px;
  }

  .acticle-view strong {
    line-height: 20px;
    color: #989898;
    font-size: 14px;
  }
  .acticle-view li {
    line-height: 20px;
    color: #989898;
    font-size: 14px;
  }
}
</style>
