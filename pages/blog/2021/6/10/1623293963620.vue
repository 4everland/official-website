<template>
  <div class="content">
    <div class="service-content">
      <p class="back-text" @click="goback()">&lt; Back</p>
      <div class="acticle-view">
        <h1>4EVERLAND：The PaaS of Web3.0</h1>

        <p><img alt="image" src="/imgs/blog/2.png" /></p>

        <p>
          4EVERLAND is designed to solve this problem by providing a
          distributed, highly efficient, self-motivated, and low-cost data
          hosting gateway based on IPFS and the underlying technology of
          Ethereum. If free accounts, free contracts, and free assets are the
          foundation of Web 3.0, then the development protocol built by
          4EVERLAND will be the access layer protocol of the Web 3.0 world,
          liberating Web 3.0 developers from the constraints of centralization,
          improve the robustness and security of the service, and provide a
          globally accelerated, ever-lasting network service for users.
        </p>

        <p>
          The Internet needs Web 3.0, a new generation of the Internet paradigm
          that advocates free identity, free contracts, and free assets, and
          blockchain technology provides a near-perfect solution to Web 3.0 with
          decentralized addresses as accounts, smart contracts for
          self-deployment and access, and Tokens that flow autonomously and
          frictionlessly. The free market creates prosperity and the blockchain
          business is growing rapidly, with liberal financial experience of
          DEFI, attracting hundreds of billions of dollars. Moreover, NFT is
          empowering art, sports and trendy culture has brought millions of
          incremental users to the blockchain world.
        </p>

        <p>
          However, there is still an important part of the Web 3.0 paradigm of
          blockchain that is missing. &quot;I trust my Ethereum addresses,
          assets and smart contracts, however, what if the DAPP interface
          I&#39;m accessing disappears or is blocked somedays in the
          future?&quot; I have a collection of valuable NFT digital artifacts
          that point to a single node storage server, will the value of the NFTs
          disappear with the shutdown of the server?&quot; What if my DEFI
          project is fast in Europe, but slow in Asia, affecting user
          experience? Clearly, the centralized, license-based, single-node data
          service model cannot meet the needs of the rapidly growing number of
          Web 3.0 users for service security and degree of freedom.
        </p>

        <h3>Technical Overview of 4EVERLAND</h3>

        <p>
          4EVERLAND is a blockchain technology-powered cloud computing platform
          designed to help developers develop Web 3.0 applications efficiently,
          with technical features such as global acceleration, privacy
          protection, and distributed storage. It is built on consensus-driven
          Swarm on top of IPFS, significantly improves Data I/O efficiency, and
          TEE-based storage challenge proofs. It achieves more stable content
          storage, more efficient content distribution, faster network access,
          file reading, and storage fraud prevention.
        </p>

        <p>
          In addition, 4EVERLAND provides products and protocols such as DWeb
          hosting, decentralized gateway, decentralized domain name, digital
          marketing system, and data services to help developers access Web 3.0
          in one click, and eventually build a globally accelerated,
          privacy-protected, link-perpetual distributed network and Web 3.0
          infrastructure with IPFS.
        </p>

        <p>Here are some core technologies of 4EVERLAND:</p>

        <ul>
          <li>
            <p>
              <strong>*4EVER-STORAGE:</strong>* 4EVERLAND forms nodes into a
              huge storage network through Swarm technology, relying on node
              cooperativeness to achieve persistent storage of specific data and
              supporting horizontal expansion of nodes.
            </p>
          </li>
          <li>
            <p>
              <strong>*4EVER-GATEWAY:</strong>* The gateway nodes contain
              dynamic DNS, Data I/O, and Cert Manager modules, and developers
              can quickly realize safe and reliable global acceleration based on
              4EVERLAND through simple configuration.
            </p>
          </li>
          <li>
            <p>
              <strong>*Storage Proof:</strong>* 4EVERLAND builds Swarm
              distributed storage network based on IPFS protocol and proposes
              storage challenge proof PoSC based on TEE technology, ensuring the
              availability and reliability of data.
            </p>
          </li>
          <li>
            <p>
              <strong>*Smart Contracts:</strong>* 4EVERLAND&#39;s smart contract
              module mainly includes payment contracts, campaign contracts,
              lending contracts, control contracts. It achieves open,
              transparent and free decentralized governance through smart
              contracts.
            </p>
          </li>
        </ul>

        <h3>Features</h3>

        <p>
          Through a unique cryptographic and economic model, 4EVERLAND has
          organized a series of nodes deployed around the world. The nodes
          collectively achieve distributed storage of content, accelerated
          global access, and enhanced stability and reliability of IPFS data
          storage and the gateway.
        </p>

        <p>Here are some 4EVERLAND features:</p>

        <ul>
          <li>
            <p>
              <strong>*Global Acceleration: </strong>* Consensus-driven Swarm
              network, massively improving network throughput and high
              availability, providing more efficient and fast Web3.0 access for
              global developers.
            </p>
          </li>
          <li>
            <p>
              <strong>*Privacy protection: </strong>* 4EVERLAND does not require
              KYC, ensures user anonymity and data security. Distributed
              storage: 4EVERLAND built a Swarm distributed storage network to
              achieve data availability and reliability.
            </p>
          </li>
        </ul>

        <h3>Mission &amp; Vision</h3>

        <p>
          4EVERLAND is the earth that carries the developers&#39; ideal paradigm
          for Web3.0, creating more robust and secure services that help the
          Internet evolve from Web 2.0 to Web 3.0 smoothly. Dedicated to be the
          infrastructure for millions of Web3.0 developers and applications and
          liberate Web3.0 developers from the shackles of centralization.
          Provide users with global acceleration, link eternal network services.
          We expect to witness the radical change of server structure and the
          evolution based on Web3.0 network upgrade in the future.
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
}
</style>
