<template>
  <section class="overflow-hidden text-gray-700">
    <div class="px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div class="flex flex-wrap -m-1 md:-m-2 gap-6">
        <custom-table
          :headers="headers"
          :rows="hblist.data"
          v-if="!hblist.loading"
        >
          <template v-slot:actionButtons="data">
            <button
              @click="update(data.rowData)"
              class="text-orange-500 underline gap-1 btn btn-link btn-xs text-[12px]"
            >
              <mdicon name="text-box-edit" />
              edit
            </button>
          </template>

          <template v-slot:pagination>
            <div class="flex justify-center mt-5 pb-5">
              <nav
                class="relative z-0 inline-flex items-center justify-center rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <a
                  v-for="(link, i) of hblist.links"
                  :key="i"
                  :disabled="!link.url"
                  href="#"
                  @click="getForPage($event, link, i + 1)"
                  aria-current="page"
                  class="relative inline-flex items-center px-4 py-2 border text-xs font-medium whitespace-nowrap hover:bg-slate-400 hover:border-slate-400 hover:text-slate-50"
                  :class="[
                    link.active
                      ? 'z-10 bg-slate-400 border-slate-400 text-slate-50'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                    i === 0
                      ? 'rounded-l-md bg-gray-100 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-500'
                      : '',
                    i === hblist.links.length - 1 ? 'rounded-r-md' : '',
                  ]"
                  v-html="link.label"
                >
                </a>
              </nav>
            </div>
          </template>
        </custom-table>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import store from "../../../store";
import CustomTable from "../CustomTable.vue";

const router = useRouter();

const headers = [
  {
    key: "hb_no",
    label: `house bill`,
    sortDirection: "ascending",
    rowClass:
      "text-[16px] text-slate-600 max-w-[350px] truncate hover:overflow-visible hover:whitespace-normal cursor-pointer ",
    headerClass: "text-[20px]",
  },

  {
    key: "status",
    label: "status",
    rowClass: "text-[14px] text-slate-600",
    sortDirection: "ascending",
  },
];

const hblist = computed(() => store.state.housebills.list);
store.dispatch("housebills/getList", { is_pa: true });
const update = (data) => {
  console.log(data);
  router.push({ name: "UpdateHousebill", params: { id: data.id } });
};
</script>
<style scoped></style>
