<template>
  <header v-if="isArticle" class="article-page-header">
    <h1>{{ articleTitle }}</h1>
    <div class="article-actions" role="group" aria-label="Article actions">
      <component
        :is="spreadsheetLinked ? 'a' : 'span'"
        :href="spreadsheetLinked ? spreadsheetUrl : undefined"
        :target="spreadsheetLinked ? '_blank' : undefined"
        :rel="spreadsheetLinked ? 'nofollow noopener noreferrer' : undefined"
        :aria-disabled="spreadsheetLinked ? undefined : 'true'"
        class="article-action article-action-primary"
        :class="{ 'is-unlinked': !spreadsheetLinked }"
      >
        Access UsFans spreadsheet
      </component>
      <component
        :is="shoppingLinked ? 'a' : 'span'"
        :href="shoppingLinked ? shoppingUrl : undefined"
        :target="shoppingLinked ? '_blank' : undefined"
        :rel="shoppingLinked ? 'nofollow noopener noreferrer' : undefined"
        :aria-disabled="shoppingLinked ? undefined : 'true'"
        class="article-action article-action-secondary"
        :class="{ 'is-unlinked': !shoppingLinked }"
      >
        Start shopping
      </component>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()

const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1Vs190yOAkrQ04LQb6l_Lnr_oTA0ny4CI3PJ_0B4_6zs/edit?gid=2086211270#gid=2086211270'
const shoppingUrl = 'https://repsootd.com/'
const isArticle = computed(() => route.path.startsWith('/blog/') && route.path !== '/blog/' && frontmatter.value.articleHeader !== false)
const articleTitle = computed(() => frontmatter.value.title || 'Usfans Spreadsheet Guide')

/* Set either field to false in an article's frontmatter to render that control without a link. */
const spreadsheetLinked = computed(() => frontmatter.value.spreadsheetLink !== false)
const shoppingLinked = computed(() => frontmatter.value.shoppingLink !== false)
</script>
