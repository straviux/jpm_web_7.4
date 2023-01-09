<template>
  <div class="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
    <h4 class="text-4xl text-gray-600 font-semibold mt-12">About</h4>

    <div class="flex mt-12">
      <div class="card lg:card-side">
        <figure>
          <img
            src="https://hrep-website.s3.ap-southeast-1.amazonaws.com/members/19th/alvarez-j.jpg"
            alt="Album"
            class="w-44"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Hon. Jose Chaves Alvarez</h2>
          <p class="text-gray-500">District Representative</p>
          <p class="text-gray-500 -mt-4">Palawan, 2nd District</p>

          <span
            >Jose Chaves Alvarez, known by initials JCA, is a Filipino
            politician from the province of Palawan, Philippines who is serving
            as the representative of Palawan's 2nd congressional district since
            2022. He was first elected as Governor of the province in 2013 and
            was re-elected in 2016 and 2019.</span
          >
        </div>
      </div>
    </div>

    <div class="container mt-10">
      <ul class="flex space-x-2">
        <li>
          <button
            @click="currentTab(1)"
            class="rounded-lg px-4 py-2 focus:outline-none"
            :class="tab == 1 ? 'tab-active' : ''"
          >
            PRINCIPAL AUTHORED BILLS
          </button>
        </li>
        <li>
          <button
            @click="currentTab(2)"
            class="rounded-lg px-4 py-2 focus:outline-none"
            :class="tab == 2 ? 'tab-active' : ''"
          >
            CO-AUTHORED BILLS
          </button>
        </li>
        <li>
          <button
            @click="currentTab(3)"
            class="rounded-lg px-4 py-2 focus:outline-none"
            :class="tab == 3 ? 'tab-active' : ''"
          >
            COMMITTEE MEMBERSHIP
          </button>
        </li>
      </ul>
      <div class="p-3 mt-6 bg-white">
        <div v-if="tab === 1">
          <h5 class="text-xl font-semibold text-gray-600">
            PRINCIPAL AUTHORED BILLS
          </h5>

          <div class="rounded w-3/4 mt-8 border">
            <div v-for="(pr, i) in pa_list.data" :key="i" class="flex flex-col">
              <div class="px-6 py-2 bg-gray-200 w-full rounded-t font-bold">
                {{ pr.hb_no }}
              </div>
              <div class="px-6 py-2 w-full" v-html="pr.content"></div>
            </div>
          </div>
        </div>
        <div v-if="tab === 2">
          <h5 class="text-xl font-semibold text-gray-600">CO-AUTHORED BILLS</h5>

          <div class="rounded w-3/4 mt-8 border">
            <div v-for="(co, i) in ca_list.data" :key="i" class="flex flex-col">
              <div class="px-6 py-2 bg-gray-200 w-full rounded-t font-bold">
                {{ co.hb_no }}
              </div>
              <div class="px-6 py-2 w-full" v-html="co.content"></div>
            </div>
          </div>
        </div>
        <div v-if="tab === 3">
          <h5 class="text-xl font-semibold text-gray-600">
            COMMITTEE MEMBERSHIP
          </h5>
          <table class="table w-2/3 mt-8 border">
            <thead>
              <tr>
                <th class="text-gray-500 w-1/2">Committee</th>
                <th class="text-gray-500 w-1/2">Position</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(committee, i) in committees" :key="i">
                <td>{{ i + 1 + ". " + committee.committee }}</td>
                <td>{{ committee.position }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import store from "../store";
const tab = ref(1);
const pa_list = computed(() => store.state.housebills.pa_list);

store.dispatch("housebills/getPrincipalAuthoredList");
const ca_list = computed(() => store.state.housebills.ca_list);

store.dispatch("housebills/getCoAuthoredList");

const currentTab = (tabNumber) => (tab.value = tabNumber);
const committees = [
  {
    committee: "Agriculture And Food",
    position: "Vice Chairperson ",
  },
  {
    committee: "Appropriations",
    position: "Vice Chairperson ",
  },
  {
    committee: "East Asean Growth Area",
    position: "Vice Chairperson ",
  },
  {
    committee: "Ecology",
    position: "Vice Chairperson ",
  },
  {
    committee: "Natural Resources",
    position: "Vice Chairperson ",
  },
  {
    committee: "Public Works And Highways",
    position: "Vice Chairperson ",
  },
  {
    committee: "Tourism",
    position: "Vice Chairperson ",
  },
  {
    committee: "Trade and Industry",
    position: "Vice Chairperson ",
  },
  {
    committee: "Cooperatives Development",
    position: "Member for the Majority ",
  },
  {
    committee: "Foreign Affairs",
    position: "Member for the Majority ",
  },
  {
    committee: "Legislative Franchises",
    position: "Member for the Majority ",
  },
  {
    committee: "Sustainable Development Goals",
    position: "Member for the Majority ",
  },
  {
    committee: "Transportation",
    position: "Member for the Majority ",
  },
  {
    committee: "Ways And Means",
    position: "Member for the Majority ",
  },
];

const co_author = [
  {
    hb: "HB00031",
    content: `
    Significance: <strong>National</strong> <br>
    Date Filed: <strong>2022-06-30</strong> <br>
    Full Title: <strong>AN ACT REQUIRING PARKING SPACE FROM MOTOR VEHICLE BUYERS IN METROPOLITAN AREAS AS A PRE-REQUISITE FOR THE PURCHASE OF A MOTOR VEHICLE AND REGISTRATION WITH THE LAND TRANSPORTATION OFFICE</strong> <br>
    Date Read: <strong>2022-07-26</strong> <br>
    Primary Referral: <strong>TRANSPORTATION</strong> <br>
    Bill Status: <strong>Pending with the Committee on TRANSPORTATION since 2022-07-26</strong>`,
  },
  {
    hb: "HB00343",
    content: `
    Date Filed: <strong>2022-09-08</strong> <br>
    Full Title: <strong>RESOLUTION EXPRESSING THE SENSE OF THE HOUSE OF REPRESENTATIVE TO INITIATE AND CONVENE THE LEGISLATURES COMPRISING THE GROWTH AREAS OF BRUNEI - INDONESIA – MALAYSIA -PHILIPPINES EAST ASEAN GROWTH AREA (BIMP-EAGA) FOR A FIRST BIMP-EAGA INTER-PARLIAMENTARY FORUM.</strong> <br>
    Date Read: <strong>2022-09-12</strong> <br>
    Primary Referral: <strong>EAST ASEAN GROWTH AREA</strong> <br>
    Bill Status: <strong>Pending with the Committee on EAST ASEAN GROWTH AREA since 2022-09-12</strong>`,
  },
];

const pr_author = [
  {
    hb: "HB00004",
    content: `
    Significance: <strong>National</strong> <br>
    Date Filed: <strong>2022-06-30</strong> <br>
    Full Title: <strong>AN ACT PROVIDING PROTECTION TO CONSUMERS AND MERCHANTS ENGAGED IN INTERNET TRANSACTIONS, CREATING FOR THE PURPOSE THE ELECTRONIC COMMERCE BUREAU, AND APPROPRIATING FUNDS THEREFOR</strong> <br>
    Date Read: <strong>2022-07-26</strong> <br>
    Primary Referral: <strong>TRADE AND INDUSTRY</strong> <br>
    Bill Status: <strong>Unfinished Business (Period of Sponsorship)</strong>`,
  },
  {
    hb: "HB00024",
    content: `
    Significance: <strong>Local</strong> <br>
    Date Filed: <strong>2022-06-30</strong> <br>
    Full Title: <strong>AN ACT CONVERTING AND EXPANDING THE LEYTE INDUSTRIAL DEVELOPMENT ESTATE INTO THE LEYTE ECOLOGICAL INDUSTRIAL ZONE, CREATING FOR THIS PURPOSE THE LEYTE ECOLOGICAL INDUSTRIAL ZONE AUTHORITY, AND APPROPRIATING FUNDS THEREFOR</strong> <br>
    Date Read: <strong>2022-07-26</strong> <br>
    Primary Referral: <strong>ECONOMIC AFFAIRS</strong> <br>
    Bill Status: <strong>Pending With Rules (Included in OB on 2022-12-05)</strong>`,
  },
];
</script>
<style scoped>
.tab-active {
  background-color: #999;
  color: #fff;
}
</style>
