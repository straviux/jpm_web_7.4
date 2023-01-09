<template>
  <Loader v-if="store.state.articles.current.loading" :isFullScreen="true" />
  <div class="mt-5 md:col-span-2 md:mt-0 max-w-7xl mx-auto">
    <form
      @submit.prevent="saveArticle"
      class="animate-fade-in-down animation"
      :style="{ animationDelay: '0.5s' }"
    >
      <div class="flex">
        <div class="space-y-3 w-2/3 bg-white px-6 rounded-l-lg">
          <div class="flex justify-between">
            <router-link
              :to="{ name: 'HousebillTable' }"
              class="btn btn-link underline text-red-500 -ml-4"
              ><mdicon name="keyboard-return" size="18" /> Back</router-link
            >
          </div>

          <div>
            <label class="block font-medium text-gray-700">Content</label>
            <div class="mt-2">
              <QuillEditor
                v-model:content="model.content"
                contentType="html"
                theme="snow"
                toolbar="full"
                ref="quill"
              />
            </div>
          </div>
        </div>

        <div class="w-1/3 bg-slate-50 p-6 space-y-6 rounded-r-lg">
          <div class="px-4 py-3 sm:px-6 flex">
            <div class="col-span-12 mt-6">
              <label for="hb_no" class="block font-medium text-gray-700"
                >Housebill No.</label
              >
              <div class="mt-2 flex shadow-sm">
                <input
                  v-model="model.hb_no"
                  type="text"
                  name="hb_no"
                  id="hb_no"
                  class="input block w-full flex-1 rounded-sm border-gray-300 focus:border-transparent focus:ring-none sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 sm:px-6 flex">
            <div class="form-control">
              <label class="label cursor-pointer space-x-2">
                <span class="label text-lg">Principal Author</span>
                <input
                  type="radio"
                  name="is_pa"
                  class="radio radio-accent"
                  v-model="model.is_pa"
                  value="true"
                  checked
                />
              </label>
              <label class="label cursor-pointer space-x-2">
                <span class="label text-lg">Co Author</span>
                <input
                  type="radio"
                  name="is_pa"
                  class="radio radio-accent"
                  v-model="model.is_pa"
                  value="false"
                />
              </label>
            </div>
          </div>
          <div class="px-6 py-3 flex">
            <div class="form-control">
              <label class="label cursor-pointer space-x-2">
                <span class="label text-lg">Published</span>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary"
                  v-model="model.status"
                />
              </label>
            </div>
          </div>
          <div class="px-4 py-3 text-center sm:px-6 space-x-6">
            <button
              class="btn border border-purple-500 bg-transparent text-purple-500 hover:bg-purple-500 hover:text-white hover:border-purple-300 gap-1 shadow mt-4 rounded-[4px]"
            >
              <mdicon name="eye-circle" /> Preview
            </button>
            <button
              type="submit"
              class="btn bg-blue-500 text-white gap-1 shadow mt-4 rounded-[4px] btn-success"
            >
              <mdicon name="content-save" /> Save
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref, watch, computed } from "vue";
import store from "../../../store";
import { useRoute } from "vue-router";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import Loader from "../../Loader.vue";
const route = useRoute();
const quill = ref(null);

console.log(route);
let model = ref({
  hb_no: "",
  content: "",
  status: true,
  is_pa: true,
});
let action = "created";

//watch current news from store
watch(
  () => store.state.housebills.current.data,
  (newVal, oldVal) => {
    console.log(newVal);
    model.value = {
      ...JSON.parse(JSON.stringify(newVal)),
    };

    quill.value.setHTML(newVal.content);
  }
);

if (route.params.id) {
  store.dispatch("housebills/getById", route.params.id);
  action = "updated";
}

const saveArticle = () => {
  store
    .dispatch("housebills/saveHousebill", model.value)
    .then(({ data }) => {
      store.commit("notify", {
        type: "success",
        message: "Data was successfully " + action,
      });
    })
    .catch((err) => {
      store.commit("notify", {
        type: "error",
        message: "Something went wrong, please try again or contact your admin",
      });
    });
};
</script>
