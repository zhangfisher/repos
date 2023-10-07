---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VoerkaI18n"
  text: "一健国际化解决方案"
  tagline: 适用于Vue/React/Nodejs/Uniapp/ReactNative/...
  actions:
    - theme: brand
      text: Github
      link: https://zhangfisher.github.io/voerka-i18n/
---

<script setup>
import RepoList from './components/RepoList.vue' 
import { data } from './data/repos.data.ts'


</script>

<RepoList :repos="data" /> 

