---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "FirstAsk"
  text: "人类高质量开源项目"
  tagline: 用爱开源，用心维护
  actions:
    - theme: brand
      text: Github
      link: https://github.com/zhangfisher


---

<script setup>
import RepoList from './components/RepoList.vue' 
import { data } from './data/repos.data.ts'


</script>

<RepoList :repos="data" /> 

