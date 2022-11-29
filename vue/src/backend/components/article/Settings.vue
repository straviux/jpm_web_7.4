<template>
  <div
    class="flex my-6 space-x-4 items-center justify-start border p-2 rounded-lg bg-white max-w-2xl mx-auto"
  >
    <div class="overflow-x-auto w-full space-y-2">
      <div class="flex justify-between">
        <h4 class="font-semibold">Category List</h4>
        <button
          class="mr-2 btn btn-xs bg-emerald-400 border-0 shadow rounded gap-1"
        >
          <mdicon name="pencil-plus-outline" size="14" />Add
        </button>
      </div>
      <table class="table table-compact w-full text-xs">
        <!-- head -->
        <thead>
          <tr>
            <th class="text-xs">#</th>
            <th class="text-normal">Category</th>
            <th class="text-xs">Status</th>
            <th class="text-xs"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rowdata, index) in category" :key="index">
            <td class="text-xs">{{ index + 1 }}</td>
            <td class="text-normal">{{ rowdata.category }}</td>
            <td class="text-xs">
              {{ rowdata.status ? "active" : "inactive" }}
            </td>
            <td>
              <button
                class="text-orange-500 underline gap-1 btn btn-link btn-xs text-[11px]"
              >
                <mdicon name="text-box-edit" size="12" />
                edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import store from "../../../store";
const category = computed(() => store.state.articles.category.data);
store.dispatch("articles/getCategoryList");
</script>
