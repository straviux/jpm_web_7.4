<template>
  <div class="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
    <h4 class="text-4xl text-gray-600 font-semibold mt-12">
      Government Agencies
    </h4>

    <div class="grid grid-cols-5 mt-12 gap-12">
      <a
        target="_blank"
        class="card w-60 bg-base-100 shadow-xl"
        v-for="(link, i) in links"
        :key="i"
        :href="link.link"
      >
        <figure>
          <img :src="link.logo" alt="dole" class="w-40" />
        </figure>
        <div class="card-body">
          <h4 class="card-title text-lg text-gray-600">
            {{ link.agency }}
          </h4>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    agency: "Deparment of Labor and Employment",
    link: "https://www.dole.gov.ph/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Department_of_Labor_and_Employment_%28DOLE%29.svg/1200px-Department_of_Labor_and_Employment_%28DOLE%29.svg.png",
  },
  {
    agency: "Department of the Interior and Local Government",
    link: "https://www.dilg.gov.ph/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxv4nxEWdw-1QC6aHxIniqzqP-2J5Zno2aSJeP7jw&usqp=CAE&s",
  },
  {
    agency: "Department of Trade and Industry",
    link: "https://www.dti.gov.ph/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/DTI_PH_new_logo.svg/1200px-DTI_PH_new_logo.svg.png",
  },
  {
    agency: "Department of Social Welfare and Development",
    link: "https://www.dswd.gov.ph/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Seal_of_the_Department_of_Social_Welfare_and_Development.svg/1200px-Seal_of_the_Department_of_Social_Welfare_and_Development.svg.png",
  },
  {
    agency: "Department of Finance",
    link: "https://www.dof.gov.ph/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Department_of_Finance_%28DOF%29.svg/720px-Department_of_Finance_%28DOF%29.svg.png",
  },
  {
    agency: "Department of Health",
    link: "https://doh.gov.ph/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Department_of_Health_%28DOH%29_PHL.svg/1200px-Department_of_Health_%28DOH%29_PHL.svg.png",
  },
  {
    agency: "Department of Agriculture",
    link: "https://www.da.gov.ph",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKbgrsMWqnoGrSbgmJ7y7qIpPjhg7oZP0dITcTxcdy4_fuOQ572C8FltMe5QbYX0s3S8&usqp=CAU",
  },
  {
    agency: "Department of Public Works and Highways",
    link: "https://www.dpwh.gov.ph",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Department_of_Public_Works_and_Highways_%28DPWH%29.svg/240px-Department_of_Public_Works_and_Highways_%28DPWH%29.svg.png",
  },
  {
    agency: "Department of Education",
    link: "https://www.deped.gov.ph",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Department_of_Education.svg/1200px-Department_of_Education.svg.png",
  },
  {
    agency: "Department of Foreign Affairs",
    link: "https://www.dfa.gov.ph",
    logo: "https://ocdn.eu/images/pulscms/M2E7MDA_/476afa12-3e65-416b-b501-cd08e907c986.png",
  },
];
</script>
