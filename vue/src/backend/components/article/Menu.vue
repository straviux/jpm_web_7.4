<template>
  <div
    class="navbar mb-10 p-6 bg-white mx-auto"
    :class="
      route.name == 'WriteArticle' || route.name == 'UpdateArticle'
        ? 'max-w-7xl'
        : ''
    "
  >
    <div class="navbar-start">
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <a>ARTICLE MAINTENANCE</a>
          </li>
          <li>
            <a class="uppercase">{{ route.meta.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul tabindex="0" class="menu menu-compact menu-horizontal space-x-2">
        <li class="nav-item">
          <router-link
            :to="{ name: 'type', params: { type: 'news' } }"
            class="border-0 border-accent font-semibold focus:bg-white uppercase"
            active-class="border-b-2"
            >News</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'type', params: { type: 'stories' } }"
            class="border-0 border-accent font-semibold focus:bg-white uppercase"
            active-class="border-b-2"
            >Stories</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'ArticleSettings' }"
            class="border-0 border-accent font-semibold focus:bg-white uppercase"
            active-class="border-b-2"
            >Settings</router-link
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <router-link
        v-if="
          route.meta.title !== 'Write Article' &&
          route.meta.title !== 'Update Article'
        "
        :to="{ name: 'WriteArticle' }"
        class="btn btn-sm gap-2 btn-outline"
        ><mdicon name="newspaper-plus" /> Write Article</router-link
      >
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
