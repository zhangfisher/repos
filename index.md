---
layout: home
---
<script setup lang="ts">

import type { Repo,GithubRepo } from './types';
import RepoList from './components/RepoList.vue' 
import FocusRepoCard from './components/FocusRepoCard.vue' 
import reposData  from './data/repos.json'  
import { defaultRepoInfos,fetchRepos,updateRepos }  from './utils/fetchGithubRepos' 
import { ref } from 'vue'
import { getFocusRepo } from './utils/getFocusRepo'

 
const repos = ref<Repo[]>(reposData)
updateRepos(repos.value,defaultRepoInfos) 

const focusRepo = ref<Repo>(getFocusRepo(repos.value))

fetchRepos().then((data)=>{
   updateRepos(repos.value,data) 
})

</script>

<FocusRepoCard :repo="focusRepo"/> 

## 开源项目

<RepoList :repos="repos" /> 
