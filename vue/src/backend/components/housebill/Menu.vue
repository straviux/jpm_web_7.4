<template>
  <div
    class="navbar mb-10 p-6 bg-white mx-auto"
    :class="
      route.name == 'AddHousebill' || route.name == 'UpdateHousebill'
        ? 'max-w-7xl'
        : ''
    "
  >
    <div class="navbar-start">
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <a>HOUSE BILL MAINTENANCE</a>
          </li>
          <li>
            <a class="uppercase">{{ route.meta.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul tabindex="0" class="menu menu-compact menu-horizontal">
        <li class="nav-item hover:bg-white">
          <router-link
            :to="{ name: 'HousebillTable' }"
            class="border-x-0 hover:bg-white focus:bg-white border-t-0 uppercase"
            active-class="border-b-2 border-slate-400"
            >ALL</router-link
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <router-link
        v-if="route.name == 'HousebillTable'"
        :to="{ name: 'AddHousebill' }"
        class="btn btn-sm gap-2 btn-outline"
        ><mdicon name="image-plus" />Add House Bill</router-link
      >
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
