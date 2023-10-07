<script setup lang="ts">
import { computed } from 'vue'
import { Repo } from './types';
 
const props = defineProps<{
  repos:Repo[],
  onlyOne:boolean      // 强制一行只显示一个
}>()

const grid = computed(() => {
  const length = props.repos.length
  const onlyOne = props.onlyOne
  if (onlyOne) {
    return ''
  } 
  if (!length) {
    return
  } else if (length === 2) {
    return 'grid-2'
  } else if (length === 3) {
    return 'grid-3'
  } else if (length % 3 === 0) {
    return 'grid-6'
  } else if (length > 3) {
    return 'grid-4'
  }
})
</script>
<script lang="ts">
import RepoCard from './RepoCard.vue'

export default {
  data(){
    return {

    }
  }
}
</script>
<template>
  <div  class="repolist">
    <div class="container">
      <div class="items">
        <div
          v-for="repo of repos"
          :key="repo.name"
          class="item"
          :class="[grid]"
        > 
          <RepoCard :repo="repo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.repolist {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .repolist {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .repolist {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {
  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }

  .item.grid-3,
  .item.grid-6 {
    width: calc(100% /3);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>