
<template>
    <a class="repo_card" :href="'https://github.com/zhangfisher/'+ repo.name" target="_blank">
        <h2 class="title">
            <HomeIcon/>
            <span class="name">{{ repo.title  }}</span>
            <GithubIcon/>
        </h2>   
        {{ repo.description  }}        
        <!-- <div class="repo_stats">
            <div class="author">{{ repo.author }}</div>         
            <div class="item"><StarIcon/>{{ githubRepo.stargazers_count }}</div>        
            <div class="item"><ForkIcon/>{{ githubRepo.forks_count }}</div>                      
        </div> -->
    </a>
</template>

<script setup lang="ts">
import type { Repo } from './types'; 
import HomeIcon from "./icons/HomeIcon.vue"
// import ForkIcon from './icons/ForkIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'

const repo = defineProps<Repo>()



</script>

<script lang="ts"> 

export default {}
</script>

<style scoped>
a.repo_card{
    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: border-color 0.25s, background-color 0.25s;
    padding: 24px;
    cursor: pointer;
}
.repo_card:hover {
  border-color: var(--vp-c-brand-1);
}



.repo_card > .title{
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;    

}
.repo_card > .title > .name{
    flex-grow: 1;
    align-items: center;
    text-align: left;
    padding-left: 0.5em;
    padding-right: 1em;
}

.repo_stats{
    display: flex;
    justify-content: space-between;
    margin-top:4px;
    font-size: 14px;
    color: var(--vp-c-text-soft);
    flex-direction: row;
}

.repo_stats > .author{
    flex-grow: 1;
}
.repo_stats >.item{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 12px;
}
.repo_stats >.item > svg{
    margin-right: 8px;
}


</style>