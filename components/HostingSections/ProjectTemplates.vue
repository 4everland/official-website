<template>
  <div class="projects">
    <div
      v-for="p in projects"
      :key="p.img"
      class="project"
      :style="{
        background: `#fff linear-gradient(160deg, ${p.color} 0%, #fff 70%)`,
      }"
    >
      <a
        class="no-decoration"
        :href="`https://hosting.4everland.org/#/new/clone-flow?s=$${encodeURIComponent(
          p.repo
        )}`"
        target="_blank"
      >
        <h3 class="title">{{ p.title }}</h3>
        <p class="desc">{{ p.desc }}</p>
        <p class="logo"><img style="width: 40px" :src="p.img" /></p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Vue',
          desc: 'The Progressive JavaScript Framework. Approachable. Versatile. Performant.',
          img: require('@/assets/frameworks/vue.svg'),
          color: 'rgb(185 241 220)',
          repo: 'https://github.com/4everland/project-templates/tree/main/examples/vue',
        },
        {
          title: 'Next.js',
          desc: 'The Progressive JavaScript Framework. Approachable. Versatile. Performant.',
          img: require('@/assets/frameworks/next.svg'),
          color: 'rgb(176 181 185)',
          repo: 'https://github.com/4everland/project-templates/tree/main/examples/nextjs',
        },
        {
          title: 'Nuxt.js',
          desc: 'The Progressive JavaScript Framework. Approachable. Versatile. Performant.',
          img: require('@/assets/frameworks/nuxt.svg'),
          color: 'rgb(185 241 220)',
          repo: 'https://github.com/4everland/project-templates/tree/main/examples/nuxtjs',
        },
        {
          title: 'Gatsby',
          desc: 'The Progressive JavaScript Framework. Approachable. Versatile. Performant.',
          img: require('@/assets/frameworks/gatsby.svg'),
          color: 'rgb(217 197 237)',
          repo: 'https://github.com/4everland/project-templates/tree/main/examples/gatsby',
        },
      ],
    }
  },
}
</script>
<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.projects .project {
  flex-grow: 1;
  flex-basis: 50%;
  max-width: 45%;
  border: 1px solid #efefef;
  margin: 5px;
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 16px;
  cursor: pointer;
}
.projects .project *:hover {
  text-decoration: none;
}

.title {
  font-size: 16px;
  font-weight: 600;
  color: #1b242c;
  line-height: 45px;
  margin: 0;
}
.desc {
  color: #999;
  font-size: 14px;
  margin: 10px 0;
}
.logo {
  text-align: right;
  margin: 0;
}
.no-decoration {
  text-decoration: none;
}
</style>
