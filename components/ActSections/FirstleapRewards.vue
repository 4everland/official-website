<script>
/* eslint-disable vue/no-v-html */
</script>

<template>
  <div>
    <v-row class="fl-reward-list">
      <v-col
        v-for="(it, i) in list1"
        :key="i"
        cols="12"
        md="4"
        class="item"
        :class="it.cls"
      >
        <div class="ta-c">
          <img :src="it.icon" class="img" />
          <h3>{{ it.title }}</h3>
        </div>
        <ul>
          <li v-for="(txt, j) in it.intros" :key="j" v-html="txt"></li>
        </ul>
      </v-col>
    </v-row>

    <div class="wrap-1 pb-0">
      <div class="con-1">
        <h2 class="pb-3">Grants & Bug Bounty</h2>
      </div>
    </div>

    <v-row class="fl-reward-list">
      <v-col
        v-for="(it, i) in list2"
        :key="i"
        cols="12"
        md="6"
        class="item"
        :class="it.cls"
      >
        <div class="ta-c">
          <img :src="it.icon" class="img" />
          <h3>{{ it.title }}</h3>
        </div>
        <ul class="plain">
          <li v-html="it.con"></li>
        </ul>
      </v-col>
    </v-row>

    <div class="wrap-1">
      <div class="con-1">
        <h2>Participation Rewards</h2>
        <div class="op-8 lh-15">
          For the projects that are not qualified but still sign up to
          participate in the 'First Leap' program, 4EVERLAND team will assess
          the capacity and give bonuses, and include the projects into
          4EVERLAND’s cooperation white-list, to enjoy long-term cooperation
          benefits.
        </div>
      </div>
    </div>

    <div class="wrap-1" style="border: 1px solid #333">
      <div class="con-1">
        <v-row>
          <v-col cols="12" md="5">
            <h3>Reward Distribution Details</h3>
            <div class="mt-5 fz-14 op-8">
              <p>
                We will review the information submitted by the participants and
                distribute the rewards to the registered Ethereum address within
                30-60 days after review. During this period, we will stay
                connected.
              </p>
              <p>
                Thank you in advance for showing your interest, we are looking
                forward to seeing an active participation from you and your
                team!
              </p>
            </div>

            <h3 class="mt-8">Terms of service</h3>
            <div class="mt-5 fz-14 op-8">
              <p>
                ● 4EVERLAND official reserves the right of final interpretation
                of the 'First Leap' program and the right to determine the rules
                and rewards.
              </p>
              <p>
                ● 4EVERLAND will review applicants or projects and inform
                whether they are eligible to participate or not.
              </p>
              <p>
                ● For any queries or doubts please email us to
                <a href="mailto:contact@4everland.org" class="fl-link-1"
                  >contact@4everland.org</a
                >.
              </p>
              <p>
                ● Join the 4EVERLAND Discord for any help. If you encounter any
                problems while using the 4EVERLAND’s services, report errors
                related to 4EVERLAND, and you will be rewarded in the 'Bug
                Bounty' program.
              </p>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="5">
            <h3>About 4EVERLAND</h3>
            <div class="mt-5 fz-14 op-8">
              <p>
                4EVERLAND is a cloud computing platform, driven by the
                blockchain technology, and designed for Web3 providing global
                acceleration, privacy protection, distributed storage, and other
                technical features. Based on technology of IPFS and Ethereum,
                4EVERLAND is committed to provide a distributed, highly
                efficient, self-motivated, and low-cost data hosting gateway,
                and become the infrastructure for millions of Web3 developers
                and applications.
              </p>
              <div class="mt-8">
                <p v-for="(it, i) in links" :key="i" class="mb-2">
                  {{ it.title }}:
                  <a
                    :href="it.href"
                    :target="it.target || '_blank'"
                    class="fl-link-1"
                    >{{ it.label || it.href }}</a
                  >
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list1: [
        {
          title: 'Basic Rewards',
          icon: require('@/assets/imgs/act/firstleap/icon/r1.png'),
          intros: [
            "Qualified applicants or invitees will receive maximum 150,000 4EVER as a reward. (Basic reward depends on deployed projects' influence, their tendency of cooperation and bilateral cooperation basis, etc.)",
            'Join the 4EVERLAND’s white-list to enjoy up to 6 months of free service of the commercial version of 4EVERLAND. ',
            "Get 4EVERLAND’s 'First Leap' NFT Medal to enjoy the diversified cooperation rights of 4EVERLAND in the future.",
            "Become a long-term partner to participate in 4EVERLAND's extensive sponsorship and diversified cooperation.",
          ],
          cls: 'r1-bg',
        },
        {
          title: 'Additional Rewards',
          icon: require('@/assets/imgs/act/firstleap/icon/r2.png'),
          intros: [
            'Get an extra 10,000 4EVER rewards when you add a 4EVERLAND tag to the deployed website.',
            'Get another extra 10,000 4EVER rewards when you add and use your own domain name.',
            'If you complete both the above requirements, you can receive an additional 30,000 4EVER bonus, totalling 50,000 4EVER bonus.',
          ],
        },
        {
          title: 'Invitation Rewards',
          icon: require('@/assets/imgs/act/firstleap/icon/r3.png'),
          intros: [
            `All 4EVERLAND users can participate in this invitation plan. If you have certain projects and developer resources, you can invite developers and project parties to participate in the 'First Leap' program and get corresponding invitation rewards.`,
            'If you successfully invite qualified project parties or individuals to participate, the inviter will receive 10,000 4EVER invitation rewards, you can get your exclusive link <a href="https://hosting.4everland.org/#/user/refer" target="_blank" class="fl-link-1">here</a>.',
            'Also, you will receive up to 5,000 4EVER clue bonuses for successfully providing the clues of qualified project party to <a href="mailto:bd@4everland.org" class="fl-link-1">bd@4everland.org</a>. 4EVERLAND team will contact based on the information you submitted.',
          ],
          cls: 'r3-bg',
        },
      ],
      list2: [
        {
          title: 'Developer Grants',
          icon: require('@/assets/imgs/act/firstleap/icon/g1.png'),
          con: "All projects or individuals participating in the 'First Leap' program, and those willing to promote the development of 4EVERLAND through brand, market, technology, community, etc., can apply for the 4EVERLAND Grants and receive up to 1 million 4EVER Grants sponsorship incentives. <a class='fl-link-1' href='/grants'>Apply Now.</a>",
          cls: 'g1-bg',
        },
        {
          title: 'Bug Bounty',
          icon: require('@/assets/imgs/act/firstleap/icon/g2.png'),
          con: '4EVERLAND team will provide bug bounty for long-term basis. If you find any bugs in the process of using 4EVERLAND, you can apply for bug bounty to get corresponding rewards.<br> <a href="https://hosting.4everland.org/#/bug-bounty" target="_blank" class="fl-link-1">Bug feedback address.</a>',
          cls: 'g2-bg',
        },
      ],
      links: [
        {
          href: 'https://www.4everland.org',
          title: 'Website',
        },
        {
          href: 'https://twitter.com/4everland_org',
          title: 'Twitter',
        },
        {
          href: 'https://t.me/org_4everland',
          title: 'Telegram',
        },

        {
          href: 'https://4everland.medium.com/',
          title: 'Medium',
        },
        {
          href: 'http://discord.gg/4everland',
          title: 'Discord',
        },
        {
          href: 'https://www.reddit.com/r/4everland/',
          title: 'Reddit',
        },
        {
          href: 'mailto:contact@4everland.org',
          label: 'contact@4everland.org',
          title: 'Email',
          target: '',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
// @media screen and (max-width: 944px) {
// 	.fl-reward-list {
// 	}
// }
.r1-bg {
  overflow: visible;
  background: url('@/assets/imgs/act/firstleap/icon/r1-bg.png') no-repeat;
  background-size: 80px;
}
.r3-bg {
  overflow: visible;
  background: url('@/assets/imgs/act/firstleap/icon/r3-bg.png') right bottom
    no-repeat;
  background-size: 80px;
}
.fl-reward-list {
  .item {
    padding: 60px 30px;
    border: 1px solid #333;
    border-right: none;
  }
  .img {
    height: 60px;
  }

  .g1-bg {
    background: url('@/assets/imgs/act/firstleap/icon/g1-bg.png') no-repeat;
    background-size: contain;
  }
  .g2-bg {
    background: url('@/assets/imgs/act/firstleap/icon/g2-bg.png') right bottom
      no-repeat;
    background-size: contain;
  }
  h3 {
    padding: 20px 0 20px;
  }
  ul,
  li {
    margin: 0;
  }
  ul {
    padding-left: 30px;
  }
  ul.plain {
    padding-right: 10px;
  }
  li {
    font-size: 14px;
    opacity: 0.8;
    margin-top: 10px;
    line-height: 1.4;
  }
}
.first-leap a.fl-link-1 {
  color: #2cfcfe;
  font-weight: bold;
  text-decoration: none;
}
</style>
